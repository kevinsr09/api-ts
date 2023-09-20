import { Router } from 'express'
import { UserRouter } from '../users/presentation/routes'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppRouter {
  static get routes (): Router {
    const router = Router()

    router.use('/api/v1/users', UserRouter.routes)
    return router
  }
}
