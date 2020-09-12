import { Injectable } from '@nestjs/common';
import * as commandLineArgs from 'command-line-args';
export interface CommandLineArgsOptions extends commandLineArgs.CommandLineOptions {
  product_name: string;
  price: number;
  description : string;
  quantity : string
}
@Injectable()
export class Seeder {
  async run(args: CommandLineArgsOptions): Promise<void> {
     await this.seedProduct(args.Product);
  }
  async seedProduct(count: number = 10): Promise<void> {
     // ... 
  }
}