import { envs } from './config/envs'
import { mongoDatabase } from './connection/mongoose'
import { AppRouter } from './presentation/routes'
import { Server } from './presentation/server'

(() => {
  try {
    void main()
  } catch (error) {
    console.log(error)
  }
})()

async function main () {
  await mongoDatabase.connect(envs.MONGO_URI)
  void new Server({ port: envs.PORT, routes: AppRouter.routes }).run()
}
