/*
https://docs.nestjs.com/providers#services
*/

import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService){}

    async getProducts(){
        const products = await this.prisma.product.findMany();

        return products;
    }

    async addProduct(dto: AddProductDTO){
        try{
            //TODO: hiányzik a subsubcategory és a rating
            const product = await this.prisma.product.create({
                data: {
                    name: dto.name,
                    category: dto.category,
                    subCategory: dto.subCategory,
                    brand: dto.brand,
                    discount: dto.discount.toString(), //TODO: nem string =>> int, adat
                    volume: dto.volume,
                    alcoholPercentage: dto.alcoholPercentage,
                    description: dto.description,
                    images: dto.images,
                    price:dto.price
                }
                
            })
            return product;

        }catch(e){
            throw new BadRequestException(e);
        }
    }





}
