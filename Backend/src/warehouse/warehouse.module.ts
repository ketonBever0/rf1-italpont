import { WarehouseController } from './warehouse.controller';
import { WarehouseService } from './warehouse.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [WarehouseController],
  providers: [WarehouseService],
})
export class WarehouseModule {}
