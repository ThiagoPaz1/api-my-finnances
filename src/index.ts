import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Iniciando os trabalhos')
})

app.listen(3000)