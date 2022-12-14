import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"

@Entity()
export class Balance {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  balance: number  
}
