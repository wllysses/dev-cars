import express from 'express'
import cors from 'cors'
import { router } from './routes/routes'

const app = express()

//middlewares
app.use(express.json())
app.use(cors())
app.use('/api', router)

export { app }