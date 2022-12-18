import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class Balance {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  balance: number

  @OneToOne(() => User, (user) => user.balance)
  user: User
}
