import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductWareService {
  constructor(private readonly prisma: PrismaService) {}


  async addProductToWarehouse(data: { productId: number; warehouseId: number; quantity: number }) {
    return this.prisma.productWare.create({
      data,
    });
  }

 
  async getProductsByWarehouse(warehouseId: number) {
    return this.prisma.productWare.findMany({
      where: { warehouseId },
      include: { product: true }, 
    });
  }


  async updateQuantity(id: number, data: { quantity: number }) {
    return this.prisma.productWare.update({
      where: { id },
      data,
    });
  }


  async deleteProductFromWarehouse(id: number) {
    return this.prisma.productWare.delete({
      where: { id },
    });
  }
}
