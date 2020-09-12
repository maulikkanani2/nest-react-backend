import { HttpCode,HttpStatus , Module , Controller, Get,Post, Body, Put, Delete,Param ,UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ProductService } from '../model/product.service';
import { MulterModule } from '@nestjs/platform-express';
import  {tbl_products}  from './../products.entity';

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

  @Post()
  create(@Body() product: tbl_products) {
    return this.productService.createProduct(product);
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
