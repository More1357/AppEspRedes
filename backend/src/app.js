import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import routes from './routes/index.js'
import { errorHandler } from './middlewares/errorHandler.js'


const app = express()


// Middlewares globales
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


// Rutas
app.use('/api', routes)


// Manejador de errores (SIEMPRE al final)
app.use(errorHandler)


export default app
