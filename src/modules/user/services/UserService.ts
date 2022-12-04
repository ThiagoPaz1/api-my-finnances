import { CreateUserDto } from "./../dto/index"
import { UserRepository } from "../repositories"

export class UserService {
  private userRepository = new UserRepository
  
  public async createUser(dataUser: CreateUserDto): Promise<void> {
    await this.userRepository.create(dataUser)  
  }
}