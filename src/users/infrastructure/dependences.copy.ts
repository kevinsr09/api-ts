import { UserService } from '../application/user.services'
import { UserController } from './user.controller'
import { UserRepositoryMongoose } from './user.repository'

const userRepositoryMongoose = new UserRepositoryMongoose()
const userServices = new UserService(userRepositoryMongoose)
export const userController = new UserController(userServices)
