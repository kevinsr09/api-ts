import { Router } from 'express'
import { userController } from '../../user/infrastructure/dependences'

export class UserRouter {
  static get routes (): Router {
    const userRouter = Router()

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    userRouter.post('/', userController.addUser.bind(userController))

    return userRouter
  }
}
