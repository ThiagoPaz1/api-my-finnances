import { Router } from 'express'
import { userController } from '../modules/user/controllers'

const userRouter = Router()

userRouter.post('/', userController.newUser)

export { userRouter }