export class UserCustomErrors extends Error {
  constructor (private readonly statusCode: number, public readonly message: string) {
    super(message)
  }

  static badRequest (message: string) {
    return new UserCustomErrors(400, message)
  }

  static unauthorized (message: string) {
    return new UserCustomErrors(401, message)
  }

  static forbiden (message: string) {
    return new UserCustomErrors(403, message)
  }

  static notFound (message: string) {
    return new UserCustomErrors(404, message)
  }

  static validationError () {

  }

  static internalError () {
    return new UserCustomErrors(500, 'Internal server error')
  }
}
