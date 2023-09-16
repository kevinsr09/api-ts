import express from 'express'
import { apiv1Router } from './routes/api-v1/api_v1'
require('./connection/mongoose')

const app = express()
app.use(express.json())

app.get('/', (_, res) => res.json({ rumos: 'Bienvenido a rumos' }))

app.use('/api/v1', apiv1Router)

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))
