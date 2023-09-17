import { UserModelMongoose } from '../../mongoose/user'
import { IUserRepository } from '../domain/interfaces/user.interface'
import { User } from '../domain/user'

export class UserRepositoryMongoose implements IUserRepository {
  public async addUser (user: User): Promise<Omit<User, 'password' | 'id'> | null> {
    const userModelMongoose = new UserModelMongoose(user)
    let userMongoose
    try {
      try {
        userMongoose = await userModelMongoose.save()
      } catch (err) {
        console.log(err)
        return null
      }
      if (userMongoose.userName == null || userMongoose.email == null || userMongoose.password == null) throw new Error('error')
      return {
        userName: userMongoose.userName,
        email: userMongoose.email,
        createAt: userMongoose.createAt
      }
    } catch (err) {
      console.log(err)
      return null
    }
  }

  public async getUserByID (userID: string): Promise<User | null> {
    const user = UserModelMongoose.findOne({ _id: userID }).lean() as infer
    if (user == null) return null
    
  }
}
