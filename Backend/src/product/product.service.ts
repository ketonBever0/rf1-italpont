/*
https://docs.nestjs.com/providers#services
*/

import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AddProductDTO, UpdateProductDTO } from "./dto/product.dto";

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getProducts() {
    const products = await this.prisma.product.findMany();

    return products;
  }

  async getOneProduct(id: number) {
    return await this.prisma.product.findUnique({ where: { id: id } });
  }

  async addProduct(dto: AddProductDTO) {
    try {
      //TODO: hiányzik a subsubcategory és a rating
      const product = await this.prisma.product.create({
        data: {
          name: dto.name,
          category: dto.category,
          subCategory: dto.subCategory,
          brand: dto.brand,
          discount: dto.discount, //TODO: nem string =>> int, adat
          volume: dto.volume,
          alcoholPercentage: dto.alcoholPercentage,
          description: dto.description,
          images: dto.images,
          price: dto.price,
        },
      });
      return product;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async updateProduct(id: number, dto: UpdateProductDTO) {
    try {
      const product = await this.prisma.product.update({
        where: { id },
        data: {
          name: dto.name,
          category: dto.category,
          subCategory: dto.subCategory,
          brand: dto.brand,
          discount: dto.discount,
          volume: dto.volume,
          alcoholPercentage: dto.alcoholPercentage,
          description: dto.description,
          images: dto.images,
          price: dto.price,
        },
      });
      return product;
    } catch (e) {
      throw new NotFoundException(e);
    }
  }

  async deleteProduct(id: number) {
    try {
      await this.prisma.product.delete({
        where: { id },
      });
      return { message: "Termék törölve" };
    } catch (e) {
      throw new NotFoundException(e);
    }
  }
}
