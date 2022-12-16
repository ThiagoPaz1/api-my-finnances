import { Router } from "express"

import { balanceController } from "../modules/balance/controller"

const balanceRouter = Router()

balanceRouter.put('/', balanceController.updateBalance)

export { balanceRouter }