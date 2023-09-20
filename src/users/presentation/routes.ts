import { Router } from 'express'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class UserRouter {
  static get routes (): Router {
    const userRouter = Router()

    userRouter.get('/', () => console.log('entra a user/'))

    return userRouter
  }
}
