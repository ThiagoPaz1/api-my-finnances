import { Request, Response } from "express"
import { balanceService } from "../service"
import { userService } from "../../user/services"

export class BalanceController {
  public async updateBalance(req: Request, res: Response) {
    const { balance, userId } = req.body

    try {
      await balanceService.updateBalance({
        balance: balance,
        userId: userId
      })
      return res.status(200).send("Saldo atualizado")
    } catch (error) {
      return res.status(500).send(error)
    }
  }
}