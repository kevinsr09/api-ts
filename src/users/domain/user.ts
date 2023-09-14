export class User {
  userName: string
  email: string
  password: string
  createAt: Date

  constructor (userName: string, email: string, password: string) {
    this.userName = userName
    this.email = email
    this.password = password
    this.createAt = new Date()
  }
}
