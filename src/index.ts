import express from 'express'
import { productsRouter } from './routes/products'

const app = express()
app.use(express.json())

app.get('/', (_, res) => res.json({ rumos: 'Bienvenido a rumos' }))

app.use('/products', productsRouter)

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))
