import { Injectable,Dependencies } from '@nestjs/common';
import  { tbl_products } from '../products.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
@Dependencies(InjectRepository(tbl_products))
export class ProductService {
  constructor(
    @InjectRepository(tbl_products)
    private productsRepository: Repository<tbl_products>,
  ) {
  }

  findAll(): Promise<tbl_products[]> {
    return this.productsRepository.find();
  }

  createProduct(product : tbl_products){
    this.productsRepository.save(product)
  }

  updateProduct( id : string, data : tbl_products){
    this.productsRepository.save({ ...data, id: Number(id) });
  }

  deleteProduct(id : string) {
    this.productsRepository.delete({id : Number(id)});
  }
}
