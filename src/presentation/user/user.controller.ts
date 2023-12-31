import type { Request, Response, NextFunction } from 'express'

import { UserService } from '../../user/application/user.services'
import { MongodbCustomErrors } from '../../data/mongodb/mongo.errors'

export class UserController {
  constructor (private readonly userService: UserService) {}

  async addUser (req: Request, res: Response, _: NextFunction) {
    try {
      const newUser = await this.userService.addUser(req.body)

      if (newUser == null) return res.status(400).json({ error: 'error' })

      return res.status(201).json(newUser).end()
    } catch (error) {
      if (!(error instanceof MongodbCustomErrors)) return res.status(500).json({ error: 'Internal server error' })

      return res.status(409).json({
        error: {
          message: error.message,
          path: error.keyValue
        }
      })
    }
  }

  async getUserByID (req: Request, res: Response, _: NextFunction) {
    const { userName } = req.params
    console.log(userName)
    if (typeof userName !== 'string') return res.status(400).json({ error: 'no ingresaste al usuario' })
    const newUser = await this.userService.getUserByID(userName)
    if (newUser == null) return res.status(400).json({ error: 'error' })
    return res.json(newUser).end()
  }
}

// export const userRouter = Router()

// userRouter.post('/', (req: Request, res: Response) => {
//   const { userName, email, password } = req.body

//   const newUser = new UserService()
//   res.json({ succes: 'succes' })
// })

// export class UserController {
//   private readonly userService: UserService

//   constructor () {
//     const userRepository = new UserRepositoryMongoose()
//     this.userService = new UserService(userRepository)
//   }

//   async addUser (req: Request, res: Response) {
//     const data = req.body

//     const newUser = UserValidator(data)
//     if (!newUser.success) return res.status(400).json(JSON.stringify({ error: newUser.error }))
//     const dataUser = newUser.data

//     return await this.userService.addUser()
//   }
// }
