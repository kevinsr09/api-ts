import { UserModelMongoose } from '../../mongoose/user'
import { IUserRepository } from '../domain/interfaces/user.interface'
import { User } from '../domain/user'

export class UserRepositoryMongoose implements IUserRepository {
  public async addUser (user: User): Promise<User | null> {
    const userModelMongoose = new UserModelMongoose(user)
    let userMongoose
    try {
      try {
        userMongoose = await userModelMongoose.save()
      } catch (err) {
        console.log(err)
        return null
      }
      console.log(userMongoose)
      const userMongooseToJSON = await userMongoose.toJSON()
      console.log(userMongooseToJSON)
      if (userMongooseToJSON.userName == null || userMongooseToJSON.email == null || userMongooseToJSON.password == null) throw new Error('error')
      return {
        id: userMongoose.id,
        userName: userMongooseToJSON.userName,
        email: userMongooseToJSON.email,
        password: userMongooseToJSON.password,
        createAt: userMongooseToJSON.createAt
      }
    } catch (err) {
      console.log(err)
      return null
    }
  }
}
