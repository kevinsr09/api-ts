import { User } from '../../../user/domain/user'
import { LoginUserDto } from '../dtos/login.user.dto'

export interface IAuthRepository {
  registerUser: (user: User) => Promise<User>
  loginUser: (loginUserDto: LoginUserDto) => Promise<User | null>
}
