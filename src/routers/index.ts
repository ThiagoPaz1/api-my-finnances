import { Router } from "express"

import { userRouter } from "./userRouter"
import { balanceRouter } from "./balanceRouter"
import { loginRouter } from "./loginRouter"

const router = Router()

router.use("/user", userRouter)
router.use("/balance", balanceRouter)
router.use("/login", loginRouter)

export { router }