export class User {
  constructor (public userName: string, public email: string, public password: string, public id: string, public createAt: Date, public role: string[], public avatar?: string) {
  }
}
