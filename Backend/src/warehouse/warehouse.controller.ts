import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';

@Controller('warehouses')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Post()
  create(@Body() data: any) {
    return this.warehouseService.createWarehouse(data);
  }

  @Get()
  findAll() {
    return this.warehouseService.getAllWarehouses();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.warehouseService.getWarehouseById(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: any) {
    return this.warehouseService.updateWarehouse(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.warehouseService.deleteWarehouse(id);
  }
}
