import { userValidator } from '../../../config/user.data.validator'
import { userResultDto } from '../../../types/user'

export class RegisterUserDto {
  private constructor (public id: string, public userName: string, public email: string, public password: string, public avatar: string | null, public role: string[] = ['USER']) {}

  static create (object: { [key: string]: any }): userResultDto {
    const result = userValidator(object)

    if (!result.success) return { success: false, error: result.error.errors }

    const avatar = (result.data.avatar != null) ? result.data.avatar : null

    return { success: true, user: new RegisterUserDto(result.data.userName, result.data.email, result.data.password, result.data.id, avatar) }
  }
}
