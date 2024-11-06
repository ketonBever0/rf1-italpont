/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, NotFoundException, Post, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { AddProductDTO } from './dto';
import { Response } from 'express';

@Controller("/product")
export class ProductController {
    constructor(private productService: ProductService){}


    @Get("/all")
    async getProducts(){
        return this.productService.getProducts();
    }

    @Post("/add")
    async addProduct(@Body() dto: AddProductDTO, @Res() res: Response){
        const product = await this.productService.addProduct(dto);
        if(product){
            res.status(200).json({message:"Termék felvéve", product});
        }else{
            throw new NotFoundException();
        }
    }
}
