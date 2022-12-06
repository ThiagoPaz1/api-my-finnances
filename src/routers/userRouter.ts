import { Router } from "express"

import { userController } from "../modules/user/controllers"
import { validationFields } from "../modules/user/controllers/middlewares/validationFields"

const userRouter = Router()

userRouter.post('/', validationFields, userController.newUser)

userRouter.put('/', validationFields, userController.updateDataUser)

export { userRouter }