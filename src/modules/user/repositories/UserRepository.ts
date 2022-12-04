import { AppDataSource } from '../../../data-source'
import { User } from '../../../database/entities/User'
import { CreateUserDto } from '../dto/index'

export class UserRepository {
  private userRepository = AppDataSource.getRepository(User)

  public async create(dataUser: CreateUserDto): Promise<void> {
    await this.userRepository.save(dataUser)
  }
}
