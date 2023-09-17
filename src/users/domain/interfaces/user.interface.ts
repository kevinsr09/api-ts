import { User } from '../user'

export interface IUserRepository {
  addUser: (user: User) => Promise<Omit<User, 'password' | 'id'> | null>
}
