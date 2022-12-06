import { IUser } from "./../interfaces/user"
import { AppDataSource } from "../../../data-source"
import { User } from "../../../database/entities/User"
import { CreateUserDto, UpdateUserDto } from "../dto/index"

export class UserRepository {
  private userRepository = AppDataSource.getRepository(User)

  public async create(dataUser: CreateUserDto): Promise<void> {
    await this.userRepository.save(dataUser)
  }

  public async getByEmail(email: string): Promise<IUser> {
    return await this.userRepository.findOneBy({ email: email })
  }

  public async update(dataUpdateUser: UpdateUserDto): Promise<void> {
    await this.userRepository.save(dataUpdateUser)
  }
}
