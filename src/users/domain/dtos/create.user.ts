import { UserValidator } from '../../../config/user.data.validator'

export class CreateUserDto {
  private constructor (public userName: string, public emial: string, public password: string, public avatar: string) {
  }

  static create (object: { [key: string]: any }) {
    const newUser = UserValidator(object)
    return new 
  }
}
