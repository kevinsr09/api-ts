import { IUserRepository } from '../domain/interfaces/user.interface'
import { User } from '../domain/user'

export class UserRepositoryMongoose implements IUserRepository {
  public async addUser (user: User): Promise<User> {

  }
}
