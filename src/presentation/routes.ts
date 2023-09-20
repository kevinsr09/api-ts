import { Router } from 'express'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppRouter {
  static get routes (): Router {
    const router = Router()

    router.use('/api/v1/users')
  }
}
