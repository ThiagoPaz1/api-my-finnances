import { Router } from "express"

import { userController } from "../modules/user/controllers"
import { validations } from "../modules/user/controllers/middlewares"

const userRouter = Router()

userRouter.post('/', validations.validationFields, userController.newUser)

userRouter.put('/:id', validations.validationId, userController.updateDataUser)

export { userRouter }