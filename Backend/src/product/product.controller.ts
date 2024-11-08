/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { AddProductDTO, UpdateProductDTO } from './dto';
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

    @Patch('/update/:id')
    async updateProduct(@Param('id') id: number, @Body() dto: UpdateProductDTO, @Res() res: Response) {
        const product = await this.productService.updateProduct(id, dto);
        res.status(200).json({ message: 'Termék módosítva', product });
    }

    @Delete('/delete/:id')
    async deleteProduct(@Param('id') id: number, @Res() res: Response) {
        const result = await this.productService.deleteProduct(id);
        res.status(200).json(result);
    }
}
