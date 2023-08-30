import express from 'express'
import { validateSwich } from './schemas/product'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const data = require('./mocks/data.json')
const app = express()

app.get('/', (_, res) => res.json({ rumos: 'Bienvenido a rumos' }))

app.get('/products', (_, res) => {
  res.json(data)
})

app.post('/products', (req, res) => {
  const dataProduct = req.body
  const result = validateSwich(dataProduct)

  if (!result.success) return res.status(400).json(result.error.message)
  return undefined
})

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))
