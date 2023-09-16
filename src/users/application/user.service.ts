import { IUserRepository } from '../domain/interfaces/user.interface'
import { User } from '../domain/user'

export class UserService {
  constructor (private readonly userRepository: IUserRepository) {
  }

  public async addUser (id: string, userName: string, email: string, password: string, date: Date): Promise<User | null> {
    const user = new User(id, userName, email, password, date)
    return await this.userRepository.addUser(user)
  }
}
