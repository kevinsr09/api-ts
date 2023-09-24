import { User } from '../../../user/domain/user'

export interface IAuthRepository {
  registerUser: (user: User) => Promise<User>
}
