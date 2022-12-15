import { balanceRepository } from "../repository"
import { UpdateBalanceDto } from "../dto"

export class BalanceService {
  public async updateBalance(dataUpdateBalance: UpdateBalanceDto) {
    return await balanceRepository.update(dataUpdateBalance)
  }
}