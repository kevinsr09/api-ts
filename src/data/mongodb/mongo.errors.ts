export class MongodbCustomErrors extends Error {
  constructor (public readonly statusCode: number, public readonly message: string, public readonly keyValue?: { [key: string]: string }) {
    super(message)
  }

  static duplicateRecord (statusCode: number, message: string, keyValue?: { [key: string]: string }) {
    return new MongodbCustomErrors(statusCode, message, keyValue)
  }

  static internalError () {
    return new MongodbCustomErrors(500, 'Internal server error')
  }
}
