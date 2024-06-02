import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('wallets')
export class Wallet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { nullable: false, default: 'NGN' })
  currency: string;

  @Column('numeric', { default: 0.0, scale: 2 })
  balance: number;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
  })
  created_at!: Date;

  @Column('varchar', { nullable: true })
  customerRef: string;


  async putMoney(amount: number): Promise<Wallet> {
    this.balance = Number(this.balance) + Number(amount);
    return this;
  }

  async removeMoney(amount: number): Promise<Wallet> {
    this.balance = Number(this.balance) - Number(amount);
    return this;
  }
}
