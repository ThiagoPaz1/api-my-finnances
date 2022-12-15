import { IUser } from "./../interfaces/user"
import { CreateUserDto, UpdateUserDto } from "./../dto/index"
import { userRepository } from "../repositories"

export class UserService {
  public async createUser(dataUser: CreateUserDto): Promise<void> {
    await userRepository.create(dataUser)  
  }

  public async findByUserEmail(email: string): Promise<IUser> {
    return await userRepository.getByEmail(email)
  }

  public async findByUserId(id: number): Promise<IUser> {
    return await userRepository.getById(id)
  }

  public async updateUser(dataUpdateUser: UpdateUserDto): Promise<void> {
    return await userRepository.update(dataUpdateUser)
  }
}