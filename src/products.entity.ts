import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class tbl_products {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  product_name: string;
  @Column()
  price: number;
  @Column()
  description: string;
  @Column()
  quantity: string;
}
