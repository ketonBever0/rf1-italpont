import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AddProductService {
  constructor(private readonly prisma: PrismaService) {}

  async receiveInventory(data: { productId: number; warehouseId: number; quantity: number }) {
    const { productId, warehouseId, quantity } = data;

    // Ellenőrizzük, hogy a termék már létezik-e a raktárban
    const existingProductWare = await this.prisma.productWare.findFirst({
      where: {
        productId,
        warehouseId,
      },
    });

    if (existingProductWare) {
      // Ha létezik, növeljük a készletet a megadott mennyiséggel
      return this.prisma.productWare.update({
        where: { id: existingProductWare.id },
        data: { quantity: existingProductWare.quantity + quantity },
      });
    } else {
      // Ha nem létezik, új rekordot hozunk létre
      return this.prisma.productWare.create({
        data: {
          productId,
          warehouseId,
          quantity, // Kezdő készlet mennyiség
        },
      });
    }
  }
}
