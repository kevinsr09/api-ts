import { Router } from 'express'
import { validateSwich } from '../schemas/product'
import { ResponseProducts } from '../types'
import { PositionSwich } from '../utilsEnums'
import { randomUUID } from 'node:crypto'

const data: ResponseProducts = require('../mocks/data.json')
const { products } = data

export const productsRouter = Router()

productsRouter.get('/', (_, res) => {
  res.json(data)
})

productsRouter.post('/', (req, res) => {
  const dataProduct = req.body
  const result = validateSwich(dataProduct)

  if (!result.success) return res.status(400).json(JSON.parse(result.error.message))

  const newProduct = {
    ...result.data,
    id: randomUUID(),
    position: PositionSwich[result.data.position]
  }
  products.push(newProduct)
  res.status(201).json(newProduct)
})
