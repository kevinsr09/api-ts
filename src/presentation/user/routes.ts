import { Router } from 'express'
import { userController } from '../../user/infrastructure/dependences'
import { ValidateData } from '../middlewares/user.middleware'

export class UserRouter {
  static get routes (): Router {
    const userRouter = Router()

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    userRouter.post('/', ValidateData.validateData, userController.addUser.bind(userController))
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    userRouter.get('/:userName', userController.getUserByID.bind(userController))

    return userRouter
  }
}
