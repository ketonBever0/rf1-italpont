import { Module } from '@nestjs/common';
import { ProductWareController } from './productware.controller';
import { ProductWareService } from './productware.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProductWareController],
  providers: [ProductWareService, PrismaService],
})
export class ProductWareModule {}
