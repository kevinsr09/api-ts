import type { Request, Response, NextFunction } from 'express'

import { MongodbCustomErrors } from '../../data/mongodb/mongo.errors'
import { AuthService } from '../application/auth.services'
import { RegisterUserDto } from '../domain/dtos/register.user.dto'
import { LoginUserDto } from '../domain/dtos/login.user.dto'
import jwt from 'jsonwebtoken'
import { envs } from '../../config/envs'

export class AuthController {
  constructor (private readonly authService: AuthService) {}

  async registerUser (req: Request, res: Response, _: NextFunction) {
    try {
      const resultValidationData = RegisterUserDto.create(req.body)

      if (!resultValidationData.success) return res.status(400).json({ error: resultValidationData.error })
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

  async loginUser (req: Request, res: Response, _: NextFunction) {
    try {
      const resultValidationData = LoginUserDto.create(req.body)
      if (!resultValidationData.success) return res.status(400).json({ error: resultValidationData.error })
      const user = await this.authService.loginUser(resultValidationData.user)
      if (user == null) return res.status(400).json({ error: 'incorrect credentials' })
      const token = jwt.sign({ email: user.email }, envs.JWT_SEED, { expiresIn: 60 * 15 })
      return res.status(200).json({ success: true, token })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: 'internal error' })
    }
  }

  async refresh (req: Request, _res: Response, _: NextFunction) {
    const { token } = req.body
    const result = jwt.verify(token, envs.JWT_SEED)
    console.log(result)
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
