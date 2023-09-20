import { UserModelMongoose } from '../../data/mongodb/models/user'
import { IUserRepository } from '../domain/interfaces/user.interface.copy'
import { User } from '../domain/user.copy'

export class UserRepositoryMongoose implements IUserRepository {
  public async addUser (user: Omit<User, 'id' | 'createAt'>): Promise<Omit<User, 'password' | 'id'>> {
    try {
      const newUser = await UserModelMongoose.create(user)
      return {
        userName: newUser.userName,
        email: newUser.email,
        createAt: newUser.createAt,
        role: newUser.role

      }
    } catch (error) {
      console.log(error)
      throw new Error('esperen')
    }
  }

  // getUserById: (userName: string) => Promise<Omit<User, 'password' | 'id'> | null>

  // public async addUser (user: Omit<User, 'id' | 'createAt'>): Promise<Omit<User, 'password' | 'id'> | null> {
  //   const userModelMongoose = new UserModelMongoose(user)
  //   let userMongoose
  //   try {
  //     try {
  //       userMongoose = await userModelMongoose.save()
  //     } catch (err) {
  //       console.log(err)
  //       return null
  //     }
  //     if (userMongoose.userName == null || userMongoose.email == null || userMongoose.password == null) throw new Error('error')
  //     return {
  //       userName: userMongoose.userName,
  //       email: userMongoose.email,
  //       createAt: userMongoose.createAt
  //     }
  //   } catch (err) {
  //     console.log(err)
  //     return null
  //   }
  // }

  // public async getUserById (userID: string): Promise<Omit<User, 'password'> | null> {
  //   const user = await UserModelMongoose.findById(userID)
  //   if (user == null) return null
  //   if (user.userName == null || user.email == null) return null

  //   return {
  //     id: userID,
  //     userName: user.userName,
  //     email: user.email,
  //     createAt: user.createAt
  //   }
  // }
}
