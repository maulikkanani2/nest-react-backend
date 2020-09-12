import { ProductModule } from './model/product.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
@Module({
  imports: [TypeOrmModule.forRoot(),ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}