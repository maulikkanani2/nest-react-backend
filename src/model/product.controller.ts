import { HttpCode,HttpStatus , Module , Controller, Get,Post, Body, Put, Delete,Param ,UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ProductService } from '../model/product.service';
import { MulterModule } from '@nestjs/platform-express';
import  tbl_products  from './products.entity';
import {data} from '../data'
import { json } from 'body-parser';

@Module({
  imports: [MulterModule.register({
    dest: './files',
  })],
})
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  get() {
    return this.productService.findAll()
  }
  
  @Get(':id')
  async putrecord(@Param('id') id: number){
     if(id != null){
      for(let i=1; i<=id; i++){
        this.productService.createProduct(data[i]);
      }
      return {"msg" : "Record Inserted successfully!"}
    }
  }

  @Post(':id')
  create(@Param('id') id: number ,@Body() product: tbl_products) {
    if(id != null){
      for(let i=1; i<=id; i++){
        this.productService.createProduct(data[i]);
      }
    }
    else{
      return this.productService.createProduct(product)
    }
  }

  @Put(':id')
  update(@Param('id') id: string ,  @Body() contactData: tbl_products) { 
    return this.productService.updateProduct(id,contactData)
  }

  @Delete(':id/delete')
  delete(@Param('id') id) {
      return this.productService.deleteProduct(id)
    }  

}
