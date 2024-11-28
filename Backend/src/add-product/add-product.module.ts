import { Module } from '@nestjs/common';
import { AddProductController } from './add-product.controller';
import { AddProductService } from './add-product.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AddProductController],
  providers: [AddProductService, PrismaService],
})
export class AddProductModule {}
