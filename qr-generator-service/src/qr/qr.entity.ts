import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QR_archive {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  amount: number;

  @Column()
  accountNo: string;

  @Column()
  qrCode: string;
}
