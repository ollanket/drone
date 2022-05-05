import express from 'express'
import bodyparser from './config/bodyparser'
import cors from './config/cors'
import { RegisterRoutes } from '../build/routes'
import swaggerUi from './config/swaggerUi'
import errorHandler from './config/errorHandler'
import { config } from 'dotenv'

config()

export const app = express()

bodyparser(app)

cors(app)

RegisterRoutes(app)

swaggerUi(app)

errorHandler(app)
