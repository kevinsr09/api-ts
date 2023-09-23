import express, { Router } from 'express'

interface IOptions {
  port: number
  routes: Router

}

export class Server {
  private readonly app = express()
  private readonly port: number
  private readonly routes: Router

  constructor (options: IOptions) {
    const { port, routes } = options
    this.routes = routes
    this.port = port ?? 1234
  }

  async run () {
    this.app.use(express.json())
    this.app.use(this.routes)
    this.app.listen(this.port, () => console.log(`server run in port: http://localhost:${this.port}`))
  }
}
