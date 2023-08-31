import { Router } from 'express'
import { validateSwich } from '../schemas/product'
import { ResponseProducts } from '../types'

const data: ResponseProducts = require('../mocks/data.json')
const { products } = data

export const productsRouter = Router()

productsRouter.get('/', (_, res) => {
  res.json(data)
})

productsRouter.post('/', (req, res) => {
  const dataProduct = req.body
  const result = validateSwich(dataProduct)

  console.log(result)
  if (!result.success) return res.status(400).json(JSON.parse(result.error.message))
  const newProduct = {
    id: crypto.randomUUID(),
    ...result.data
  }
  products.push(newProduct)
})
