import { User } from "../../../database/entities/User"

export interface UpdateBalanceDto {
  id?: number
  balance: number
  user?: User
}