import { Balance } from "../../../database/entities/Balance"

export interface CreateUserDto {
  name: string, 
  email: string,
  password: string
  balance: Balance
}

export interface UpdateUserDto {
  id: number
  name: string,
  email: string,
}