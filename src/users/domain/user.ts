export class User {
  constructor (readonly id: string, public userName: string, public email: string, public password: string, readonly date: Date) {
  }
}
