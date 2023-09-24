export class User {
  constructor (public userName: string, public email: string, public password: string, public id: string, public role: string[], public avatar: string | null, public createAt?: Date) {
  }
}
