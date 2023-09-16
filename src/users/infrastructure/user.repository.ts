import { UserModelMongoose } from '../../mongoose/user'
import { IUserRepository } from '../domain/interfaces/user.interface'
import { User } from '../domain/user'

export class UserRepositoryMongoose implements IUserRepository {
  public async addUser (user: User): Promise<User | null> {
    const newUser = new UserModelMongoose({
      userName: user.userName,
      email: user.email,
      password: user.password
    })

    try {
      const resultUser = await newUser.save()
      return await resultUser.toJSON()
    } catch (err) {
      console.log(err)
      return null
    }
  }
}
