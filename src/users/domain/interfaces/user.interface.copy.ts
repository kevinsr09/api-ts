import { User } from '../user.copy'

export interface IUserRepository {
  addUser: (user: Omit<User, 'id' | 'createAt'>) => Promise<Omit<User, 'password' | 'id'>>
  // getUserById: (userName: string) => Promise<Omit<User, 'password' | 'id'> | null>
}
