import { Router } from "express"

import { loginController } from "../modules/login/controllers"
import { validationsLogin } from "../modules/login/middlewares"

const loginRouter = Router()

loginRouter.post('/', validationsLogin.validationFields, loginController.login)

export { loginRouter }