import type { Request, Response, NextFunction } from 'express'

import { MongodbCustomErrors } from '../../data/mongodb/mongo.errors'
import { AuthService } from '../application/auth.services'
import { RegisterUserDto } from '../domain/dtos/register.user.dto'

export class AuthController {
  constructor (private readonly authService: AuthService) {}

  async registerUser (req: Request, res: Response, _: NextFunction) {
    try {
      const resultValidationData = RegisterUserDto.create(req.body)

      if (!resultValidationData.success) return res.status(409).json({ error: resultValidationData.error })
      await this.authService.registerUser(resultValidationData.user)

      return res.status(201).json({ userName: resultValidationData.user.userName }).end()
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
