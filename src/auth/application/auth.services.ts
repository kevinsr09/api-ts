import { User } from '../../user/domain/user'
import { LoginUserDto } from '../domain/dtos/login.user.dto'
import { RegisterUserDto } from '../domain/dtos/register.user.dto'
import { IAuthRepository } from '../domain/interfaces/auth.interface'

export class AuthService {
  constructor (private readonly authRepository: IAuthRepository) {}

  public async registerUser (newUser: RegisterUserDto) {
    const user = new User(newUser.id, newUser.userName, newUser.email, newUser.password, newUser.role, newUser.avatar)

    return await this.authRepository.registerUser(user)
  }

  public async loginUser (loginUser: LoginUserDto) {
    return await this.authRepository.loginUser(loginUser)
  }
}
