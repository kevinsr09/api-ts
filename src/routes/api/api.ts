import { Router } from 'express'
import { productsRouter } from './products'
import { userRouter } from './users'

export const apiv1Router = Router()

apiv1Router.use('/products', productsRouter)
apiv1Router.use('/users', userRouter)

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
