import type { Request, Response, NextFunction } from 'express'

import { UserService } from '../application/user.services'

export class UserController {
  constructor (private readonly userService: UserService) {}

  async addUser (req: Request, res: Response, _: NextFunction) {
    const { userName, email, password } = req.body

    console.log(userName, email, password)

    const newUser = await this.userService.addUser(userName, email, password)
    if (newUser == null) return res.status(400).json({ error: 'error' })

    res.json(newUser).end()
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
