import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Req,
  Res,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { Response } from "express";
import { AuthGuard } from "src/auth/guard/auth.guard";
import { RoleGuard } from "src/auth/guard/role.guard";
import { Roles, User } from "src/auth/auth.decorator";
import { FilesInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname, join } from "path";
import * as fs from "fs";
import { OrderService } from "./order.service";
import { AddOrderDTO, UpdateOrderDTO } from "./dto/order.dto";
import { json } from "stream/consumers";
import { User as UserModel } from "@prisma/client";

@Controller("/order")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get("/all")
  async getOrders() {
    return await this.orderService.getOrders();
  }

  @UseGuards(AuthGuard)
  @Get("/get/:id")
  async getOne(@Param("id") id: string) {
    return await this.orderService.getOneOrder(parseInt(id));
  }

  @UseGuards(AuthGuard)
  @Post("/add")
  async addOrder(
    @User() user: any,
    @Body() dto: AddOrderDTO,
    @Res() res: Response,
  ) {
    console.log(user);
    const order = await this.orderService
      .addOrder(user.sub, dto)
      .catch((e) => console.log(e));
    if (order) {
      res.status(200).json({ message: "Termék felvéve", order });
    } else {
      throw new NotFoundException();
    }
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Roles("ADMIN", "MODERATOR")
  @Delete("/delete/:id")
  async deleteOrder(@Param("id") id: string, @Res() res: Response) {
    const result = await this.orderService.deleteOrder(parseInt(id));
    res.status(200).json(result);
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Roles("ADMIN", "MODERATOR")
  @Patch("/update/:id")
  async updateProduct(
    @Param("id") id: string,
    @Body() dto: UpdateOrderDTO,
    @Res() res: Response,
  ) {
    const order = await this.orderService.updateOrder(parseInt(id), dto);
    res.status(200).json({ message: "Termék módosítva", order });
  }

  @Post("/addproducttoorder")
  async addProductToOrder(
    @Body() body: { productId: number; orderId: number; quantity: number },
  ) {
    await this.orderService.addProductToOrder(
      body.quantity,
      body.orderId,
      body.productId,
    );
    return { message: "Termék hozzáadva a rendeléshez" };
  }

  @Delete("/deleteproductfromorder/:id")
  async deletaProductFromOrder(@Param("id") id: string) {
    await this.orderService.deleteProductFromOrder(parseInt(id));
    return { message: "Termék eltávolítva a rendelésből" };
  }
}
