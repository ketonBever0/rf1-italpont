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
      const product = await this.prisma.product.create({
        data: {
          name: dto.name,
          category: dto.category,
          subCategory: dto.subCategory,
          brand: dto.brand,
          discount: dto.discount,
          volume: dto.volume,
          alcoholPercentage: dto.alcoholPercentage,
          description: dto.description,
          images: "",
          price: dto.price,
        },
      });
      return product;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async addImages(id: number, files: Array<Express.Multer.File>) {
    let filenames = [];
    const current = (
      await this.prisma.product.findUnique({
        where: { id: id },
        select: { images: true },
      })
    ).images;
    try {
      filenames = JSON.parse(current);
    } catch {
      filenames = [];
    }
    // console.log(filenames);
    files.forEach((file) => {
      filenames.push(file.filename);
    });
    return await this.prisma.product.update({
      where: { id: id },
      data: {
        images: JSON.stringify(filenames),
      },
    });
  }

  async deleteImage(id: number, filename: string) {
    const filenames: Array<string> = JSON.parse(
      (
        await this.prisma.product.findUnique({
          where: { id: id },
          select: { images: true },
        })
      ).images,
    );
    // console.log(filenames);
    filenames.splice(filenames.indexOf(filename, 1));
    return await this.prisma.product.update({
      where: { id: id },
      data: {
        images: JSON.stringify(filenames),
      },
    });
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
