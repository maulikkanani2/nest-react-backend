import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export default class tbl_products {
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
