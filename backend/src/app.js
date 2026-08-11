import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import routes from './routes/index.js'
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js'

const app = express()

const allowedOrigins = [
  'http://localhost:5173', 'http://localhost:4173', 'http://localhost:3000',
  'http://127.0.0.1:5173', 'http://127.0.0.1:4173', 'http://127.0.0.1:3000',
  'http://200.3.127.46:8002',
]

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true)
    if (allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      console.warn(`[CORS] Bloqueado origen: ${origin}`)
      callback(new Error('No permitido por CORS'))
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['Authorization']
}

app.use(helmet())
app.use(cors(corsOptions))
app.use(express.json())
app.use(morgan('dev'))

// ✅ Si Apache quita el /api, esto lo vuelve a poner
app.use((req, res, next) => {
  if (req.url.startsWith('/v1/')) {
    req.url = `/api${req.url}`;
  }
  next();
});

// ✅ Montamos las rutas en /api
app.use('/api', routes)

app.use(notFoundHandler)
app.use(errorHandler)

export default app