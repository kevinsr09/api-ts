import type { Request, Response } from 'express'
import { UserValidator } from '../../schemas/user'
import { UserRepositoryMongoose } from './user.repository'
import { UserService } from '../application/user.service'

export class UserController {
  private readonly userService: UserService

  constructor () {
    const userRepository = new UserRepositoryMongoose()
    this.userService = new UserService(userRepository)
  }

  async addUser (req: Request, res: Response) {
    const data = req.body

    const newUser = UserValidator(data)
    if (!newUser.success) return res.status(400).json(JSON.stringify({ error: newUser.error }))

    return await this.userService.addUser(...newUser.data)
  }
}
