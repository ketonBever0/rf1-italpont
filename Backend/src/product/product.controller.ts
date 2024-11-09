/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Res,
  UseGuards,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { AddProductDTO, UpdateProductDTO } from "./dto";
import { Response } from "express";
import { AuthGuard } from "src/auth/guard/auth.guard";
import { RoleGuard } from "src/auth/guard/role.guard";
import { Roles } from "src/auth/auth.decorator";

@Controller("/product")
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get("/all")
  async getProducts() {
    return this.productService.getProducts();
  }

  @Get("/get/:id")
  async getOne(@Param("id") id: string) {
    return this.productService.getOneProduct(parseInt(id));
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Roles("ADMIN", "MODERATOR")
  @Post("/add")
  async addProduct(@Body() dto: AddProductDTO, @Res() res: Response) {
    const product = await this.productService.addProduct(dto);
    if (product) {
      res.status(200).json({ message: "Termék felvéve", product });
    } else {
      throw new NotFoundException();
    }
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Roles("ADMIN", "MODERATOR")
  @Patch("/update/:id")
  async updateProduct(
    @Param("id") id: string,
    @Body() dto: UpdateProductDTO,
    @Res() res: Response,
  ) {
    const product = await this.productService.updateProduct(parseInt(id), dto);
    res.status(200).json({ message: "Termék módosítva", product });
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Roles("ADMIN", "MODERATOR")
  @Delete("/delete/:id")
  async deleteProduct(@Param("id") id: string, @Res() res: Response) {
    const result = await this.productService.deleteProduct(parseInt(id));
    res.status(200).json(result);
  }
}
