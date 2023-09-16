import { Router } from 'express'
import { UserController } from '../../users/infrastructure/user.controller'

export const userRouter = Router()

userRouter.post('/', UserController.addUser)

// userRouter.get('/:id', (_, res) => {
// })

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
