import { ProductController } from './product.controller';
import { ProductService } from './product.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        ProductController,],
    providers: [
        ProductService,],
})
export class ProductModule { }
