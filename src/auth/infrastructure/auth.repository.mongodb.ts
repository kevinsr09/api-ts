import { UserModelMongoose } from '../../data/mongodb/models/user'
import { DuplicateKeyError } from '../../types/errors/mongodb'
import { MongodbCustomErrors } from '../../data/mongodb/mongo.errors'
import { MongoServerError } from 'mongodb'
import { IAuthRepository } from '../domain/interfaces/auth.interface'
import { User } from '../../user/domain/user'

export class AuthRepositoryMongoDB implements IAuthRepository {
  async registerUser (user: User): Promise<User> {
    try {
      await UserModelMongoose.create({ ...user, _id: user.id })
      return user
    } catch (error) {
      if (!(error instanceof Error)) throw MongodbCustomErrors.internalError()

      if (!(error.constructor.name === MongoServerError.prototype.constructor.name)) throw new MongodbCustomErrors(500, error.message)
      console.log(error.message)
      const mongoServerError = error as DuplicateKeyError

      if (!(mongoServerError.code === 11000)) throw new MongodbCustomErrors(500, error.message)
      throw MongodbCustomErrors.duplicateRecord(mongoServerError.code, 'Another user has registered this key', mongoServerError.keyValue)
    }
  }

  // const user = await UserModelMongoose.findOne({ userName })
  // if (user == null) return null
  // return user
}
