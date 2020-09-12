
import * as commandLineArgs from 'command-line-args';
import { NestFactory } from '@nestjs/core';
import { tbl_products } from './products.entity';
import { CommandLineArgsOptions, Seeder } from './seeder';
const seederArgsInterface: commandLineArgs.OptionDefinition[] = [
  { name: 'tbl_products', type: Number, defaultValue: 10 },
];
async function bootstrap() {
  await NestFactory.createApplicationContext(Seeder)
    .then(async appContext => {
       const seeder = appContext.get(Seeder);
       
       await seeder
         .run(commandLineArgs(seederArgsInterface) as CommandLineArgsOptions)
         .then(() => { 
             // ... 
         })
         .catch(error => {
             // ...
         })
    })
    .catch(error => {
       throw error;
    });
}
bootstrap();