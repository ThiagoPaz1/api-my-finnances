import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Balance } from "./Balance"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string
  
  @OneToOne(() => Balance, (balance) => balance.user)
  @JoinColumn()
  balance: Balance
}
