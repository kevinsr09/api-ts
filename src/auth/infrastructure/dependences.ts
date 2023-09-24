import { AuthService } from '../application/auth.services'
import { AuthController } from './auth.controller'
import { AuthRepositoryMongoDB } from './auth.repository.mongodb'

const authRepositoryMongoDB = new AuthRepositoryMongoDB()
const authService = new AuthService(authRepositoryMongoDB)
export const authController = new AuthController(authService)
