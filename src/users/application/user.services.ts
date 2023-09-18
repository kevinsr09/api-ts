import { IUserRepository } from '../domain/interfaces/user.interface'
import { User } from '../domain/user'

export class UserService {
  constructor (private readonly userRepository: IUserRepository) {
  }

  public async addUser (userName: string, email: string, password: string): Promise<Omit<User, 'password' | 'id'> | null> {
    const user = new User(userName, email, password)
    return await this.userRepository.addUser(user)
  }

  public async getUserByID (userID: string): Promise<Omit<User, 'password'> | null> {
    return await this.userRepository.getUserById(userID)
  }
}
