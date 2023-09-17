import { Router } from 'express'
import { productsRouter } from './apiv1/products'
import { userController } from '../users/infrastructure/dependences'

export const apiRouter = Router()

apiRouter.use('/products', productsRouter)
// eslint-disable-next-line @typescript-eslint/no-misused-promises
apiRouter.use('/users', userController.addUser.bind(userController))

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
