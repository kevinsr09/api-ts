import { IUserRepository } from '../domain/interfaces/user.interface.copy'
import { User } from '../domain/user.copy'

export class UserService {
  constructor (private readonly userRepository: IUserRepository) {
  }

  public async addUser (userName: string, email: string, password: string, role: string[] = ['user'], avatar: string): Promise<Omit<User, 'password' | 'id'> | null> {
    return await this.userRepository.addUser({ userName, email, password, role, avatar })
  }

  // public async getUserByID (userName: string): Promise<Omit<User, 'password' | 'id'> | null> {
  //   return await this.userRepository.getUserById(userName)
  // }
}
