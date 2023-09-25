import { authLoginValidator } from '../../../helpers/auth.login.validator'
import { AuthLoginUserDto } from '../../../types/user'

export class LoginUserDto {
  private constructor (public email: string, public password: string) {}

  static create (object: { [key: string]: any }): AuthLoginUserDto {
    const result = authLoginValidator(object)
    if (!result.success) return { success: false, error: result.error.errors }
    return { success: true, user: new LoginUserDto(result.data.email, result.data.password) }
  }
}
