import express from 'express'
import cors from 'cors'

import { userDB } from './mock'

const app = express()

app.use(cors())
app.use(express.json())

app.post('/user', (req, res) => {
  const { name, email, password } = req.body

  if (name && email && password) {
    userDB.push({
      name,
      email,
      password
    })

    return res.status(201).send('Criado com sucesso!')
  }

  return res.status(400).send('Preenchar todos os campos')
})

app.get('/users', (req, res) => {
  console.log(userDB)
  return res.status(200).json(userDB)
})

app.listen(3000)