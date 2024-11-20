import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductWareService } from './productware.service';

@Controller('product-ware')
export class ProductWareController {
  constructor(private readonly productWareService: ProductWareService) {}

  
  @Post()
  async addProductToWarehouse(@Body() data: { productId: number; warehouseId: number; quantity: number }) {
    return this.productWareService.addProductToWarehouse(data);
  }


  @Get('warehouse/:warehouseId')
  async getProductsByWarehouse(@Param('warehouseId') warehouseId: number) {
    return this.productWareService.getProductsByWarehouse(warehouseId);
  }


  @Put(':id')
  async updateQuantity(@Param('id') id: number, @Body() data: { quantity: number }) {
    return this.productWareService.updateQuantity(id, data);
  }

 
  @Delete(':id')
  async deleteProductFromWarehouse(@Param('id') id: number) {
    return this.productWareService.deleteProductFromWarehouse(id);
  }
}
