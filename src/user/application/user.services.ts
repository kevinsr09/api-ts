import { IUserRepository } from '../domain/interfaces/user.interface'
import { User } from '../domain/user'

export class UserService {
  constructor (private readonly userRepository: IUserRepository) {
  }

  public async addUser (user: Omit<User, 'id' | 'createAt' | 'role'>): Promise<Omit<User, 'password' | 'id'>> {
    return await this.userRepository.addUser(user)
  }

  public async getUserByID (userName: string): Promise<Omit<User, 'password' | 'id'> | null> {
    return await this.userRepository.getUserById(userName)
  }
}
