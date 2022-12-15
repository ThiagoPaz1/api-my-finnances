import { Request, Response } from "express"
import { balanceService } from "../service"

export class BalanceController {
  public async updateBalance(req: Request, res: Response) {
    const { balance } = req.body

    try {
      await balanceService.updateBalance(balance)
      return res.status(200).send("Saldo atualizado")
    } catch (error) {
      return res.status(500).send(error)
    }
  }
}