import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WarehouseService {
  constructor(private prisma: PrismaService) {}

  async createWarehouse(data: any) {
    return this.prisma.warehouse.create({
      data,
    });
  }

  async getAllWarehouses() {
    return this.prisma.warehouse.findMany({
      include: { productWares: true }, 
    });
  }

  async getWarehouseById(id: number) {
    return this.prisma.warehouse.findUnique({
      where: { id },
      include: { productWares: true }, 
    });
  }

  async updateWarehouse(id: number, data: any) {
    return this.prisma.warehouse.update({
      where: { id },
      data,
    });
  }

  async deleteWarehouse(id: number) {
    return this.prisma.warehouse.delete({
      where: { id },
    });
  }
}
