import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import  tbl_products from './products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([tbl_products])],
  providers: [ProductService],
  controllers: [ProductController],
  exports: []
})
export class ProductModule { }