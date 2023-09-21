import { UserModelMongoose } from '../../data/mongodb/models/user'
import { IUserRepository } from '../domain/interfaces/user.interface'
import { User } from '../domain/user'
import { DuplicateKeyError } from '../../types/errors/mongodb'
import { MongodbCustomErrors } from '../../data/mongodb/mongo.errors'
import { MongoServerError } from 'mongodb'
import { UserCustomErrors } from '../domain/errors/custom.errors'

export class UserRepositoryMongoose implements IUserRepository {
  public async addUser (user: Omit<User, 'id' | 'createAt' | 'role'>): Promise<Omit<User, 'password' | 'id'>> {
    try {
      const newUser = await UserModelMongoose.create(user)
      return {
        userName: newUser.userName,
        email: newUser.email,
        createAt: newUser.createAt,
        role: newUser.role
      }
    } catch (error) {
      // console.log(typeof error, '-----    -----')
      // console.log(Object.getPrototypeOf(MongoServerError))
      // if (error instanceof Error) {
      //   console.log(error.constructor.name)
      //   console.log(MongoServerError.prototype.constructor.name)
      //   console.log(MongoError.prototype.constructor.name)
      // }

      if (!(error instanceof Error)) throw UserCustomErrors.internalError()

      if (!(error.constructor.name === MongoServerError.prototype.constructor.name)) throw new MongodbCustomErrors(500, error.message)
      console.log(error.message)
      const mongoServerError = error as DuplicateKeyError

      if (!(mongoServerError.code === 11000)) throw new MongodbCustomErrors(500, error.message)
      throw MongodbCustomErrors.duplicateRecord(mongoServerError.code, 'Another user has registered this key', mongoServerError.keyValue)
    }
  }
}
