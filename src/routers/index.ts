import { Router } from "express"

import { userRouter } from "./userRouter"
import { balanceRouter } from "./balanceRouter"

const router = Router()

router.use('/user', userRouter)
router.use('/balance', balanceRouter)

export { 
  router,
  balanceRouter 
}