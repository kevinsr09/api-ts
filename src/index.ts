import express from 'express'
import { apiRouter } from './routes/api'
require('./connection/mongoose')

const app = express()
app.use(express.json())

app.get('/', (_, res) => res.json({ rumos: 'Bienvenido a rumos' }))

app.use('/api/v1', apiRouter)

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))
