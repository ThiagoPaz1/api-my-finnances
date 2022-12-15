import { AppDataSource } from "../../../data-source"
import { Balance } from "../../../database/entities/Balance"
import { UpdateBalanceDto } from "../dto"

export class BalanceRepository {
  private balanceRepository = AppDataSource.getRepository(Balance)

  public async update(dataUpdateBalance: UpdateBalanceDto): Promise<void> {
    await this.balanceRepository.save(dataUpdateBalance)
  }
}
