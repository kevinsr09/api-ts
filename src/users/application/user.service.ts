import { IUserRepository } from '../domain/interfaces/user.interface'
import { User } from '../domain/user'

export class UserService {
  private readonly userRepository: IUserRepository

  constructor (userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  public async addUser (userName: string, email: string, password: string): Promise<User> {
    const user = new User(userName, email, password)
    return await this.userRepository.addUser(user)
  }
}
