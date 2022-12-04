import { IUser } from "./../interfaces/user"
import { CreateUserDto } from "./../dto/index"
import { userRepository } from "../repositories"

export class UserService {
  public async createUser(dataUser: CreateUserDto): Promise<void> {
    await userRepository.create(dataUser)  
  }

  public async findByUserEmail(email: string): Promise<IUser> {
    return await userRepository.getByEmail(email)
  }
}