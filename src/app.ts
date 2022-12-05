import express from 'express'
import cors from 'cors'

import { AppDataSource } from "./data-source"
import { userRouter } from './routers/index'

const app = express()

AppDataSource.initialize()
.then(() => console.log('Iniciado banco de dados!'))
.catch(error => console.log(error))

app.use(cors())
app.use(express.json())
app.use('/user', userRouter)

app.listen(process.env.PORT)