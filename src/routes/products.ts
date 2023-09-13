import { Router } from 'express'
import { ResponseProducts } from '../types/types'
const data: ResponseProducts = require('../mocks/product.json')

export const productsRouter = Router()

productsRouter.get('/', (_, res) => {
  res.json(data)
})

productsRouter.get('/:id', (_, res) => {
  res.json(data)
})

/*
// eslint-disable-next-line @typescript-eslint/no-misused-promises
productsRouter.post('/', async (req, res) => {
  const dataProduct = req.body
  const result = validateSwitch(dataProduct)

  if (!result.success) return res.status(400).json(JSON.parse(result.error.message))

  const resultModel = await ProductModel.create(result.data)

  if (!resultModel.success) return res.status(404).json(resultModel.error)

  res.status(201).json(resultModel.data)
})

*/
