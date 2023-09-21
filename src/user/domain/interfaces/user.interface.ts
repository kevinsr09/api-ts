import { User } from '../user'

export interface IUserRepository {
  addUser: (user: Omit<User, 'id' | 'createAt' | 'role'>) => Promise<Omit<User, 'password' | 'id'>>
  // getUserById: (userName: string) => Promise<Omit<User, 'password' | 'id'> | null>
}
