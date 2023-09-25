import { Router } from 'express'
// import { userController } from '../../user/infrastructure/dependences'
import { authController } from '../../auth/infrastructure/dependences'

export class UserRouter {
  static get routes (): Router {
    const userRouter = Router()

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    userRouter.post('/register', authController.registerUser.bind(authController))
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    userRouter.post('/login', authController.loginUser.bind(authController))

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    userRouter.post('/refresh', authController.refresh.bind(authController))

    // userRouter.get('/:userName', userController.getUserByID.bind(userController))

    return userRouter
  }
}
