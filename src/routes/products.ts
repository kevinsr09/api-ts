import { Router } from 'express'
import { validateSwitch } from '../schemas/car-parts/switch'
import { ResponseProducts } from '../types/types'
import { ProductModel } from '../models/product'

const data: ResponseProducts = require('../mocks/all_products.json')

export const productsRouter = Router()

productsRouter.get('/', (_, res) => {
  res.json(data)
})

productsRouter.get('/:id', (_, res) => {
  res.json(data)
})

// eslint-disable-next-line @typescript-eslint/no-misused-promises
productsRouter.post('/switch', async (req, res) => {
  const dataProduct = req.body
  const result = validateSwitch(dataProduct)

  if (!result.success) return res.status(400).json(JSON.parse(result.error.message))

  const resultModel = await ProductModel.create(result.data)

  if (!resultModel.success) return res.status(404).json(resultModel.error)

  res.status(201).json(resultModel.data)
})
