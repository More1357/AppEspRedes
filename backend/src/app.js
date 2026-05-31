import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import routes from './routes/index.js'
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js'

const app = express()

// CORS con orígenes explícitos
const allowedOrigins = [
  // Local
  'http://localhost:4173',
  'http://localhost:3000',    
  'http://127.0.0.1:4173',
  'http://127.0.0.1:3000',
  
  // Servidor
  'http://200.3.127.46:8002',
]

const corsOptions = {
  origin: function (origin, callback) {
    // Permitir requests sin origen (Postman, curl, scripts locales)
    if (!origin) return callback(null, true)
    
    // Verificar si el origen está permitido
    if (allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      console.warn(`[CORS] Bloqueado origen: ${origin}`)
      callback(new Error('No permitido por CORS'))
    }
  },
  credentials: true,  // Permitir envío de cookies/headers de autenticación
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['Authorization']
}

// Middlewares globales
app.use(helmet())
app.use(cors(corsOptions))
app.use(express.json())
app.use(morgan('dev'))

// Rutas
app.use('/api', routes)

// 404 para rutas no encontradas
app.use(notFoundHandler)

// Manejador de errores
app.use(errorHandler)

export default app
