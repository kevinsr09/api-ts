import express from 'express'
const data = require('./mocks/data.json')

const app = express()

app.get('/', (_, res) => res.json({ rumos: 'Bienvenido a rumos' }))

app.get('/products', (_, res) => {
  res.json(data)
})

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))
