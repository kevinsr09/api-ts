export class User {
  constructor (public readonly userName: string, public readonly email: string, public readonly password: string, public readonly id?: string, public readonly createAt?: Date) {
  }
}
