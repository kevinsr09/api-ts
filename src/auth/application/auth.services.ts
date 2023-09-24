import { User } from '../../user/domain/user'
import { RegisterUserDto } from '../domain/dtos/register.user.dto'
import { IAuthRepository } from '../domain/interfaces/auth.interface'

export class AuthService {
  constructor (private readonly authRepository: IAuthRepository) {}

  public async registerUser (newUser: RegisterUserDto) {
    const user = new User(newUser.id, newUser.userName, newUser.email, newUser.password, newUser.role, newUser.avatar)

    return await this.authRepository.registerUser(user)
  }
}
