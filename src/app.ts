import express from 'express'
import { AppDataSource } from "./data-source"
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

AppDataSource.initialize()
.then(() => console.log('Iniciado banco de dados!'))
.catch(error => console.log(error))

app.listen(process.env.PORT)