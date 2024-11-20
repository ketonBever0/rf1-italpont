import {
    BadRequestException,
    Body,
    Injectable,
    NotFoundException,
  } from "@nestjs/common";
  import { PrismaService } from "src/prisma/prisma.service";
import { AddOrderDTO, UpdateOrderDTO } from "./dto/order.dto";
import { Product } from "@prisma/client";

  @Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

    async getOrders(){
        const orders = await this.prisma.order.findMany();
        return orders;
    }

    async getOneOrder(id: number){
        return await this.prisma.order.findUnique({ where: { id: id } });
    }

    async addOrder(@Body() dto: AddOrderDTO){
        try {
            const order = await this.prisma.order.create({
              data: {
                postcode: dto.postcode,
                city: dto.city,
                address: dto.address,
                price: dto.price,
                userId: dto.userId,
                
              },
            });
            for(let i = 0; i < dto.products.length; i++){
                await this.prisma.productOrder.create({
                    data:{
                        orderId: order.id,
                        productId: dto.products[i].id,
                        quantity: dto.products[i].quantity

                    }
                })
            }
            return order;
            
          } catch (e) {
            throw new BadRequestException(e);
          }
    }

    async deleteOrder(id: number) {
        try{
            await this.prisma.order.delete({
                where: {id},
            });
            return {message: "Rendelés törölve"};

        }catch(e){
            throw new NotFoundException(e);
        }
    }

    async updateOrder(id: number, dto: UpdateOrderDTO){
        try {
            const order = await this.prisma.order.update({
              where: { id },
              data: {
                postcode: dto.postcode,
                city: dto.city,
                address: dto.address,
                price: dto.price,
                userId: dto.userId,
              },
            });
            return order;
          } catch (e) {
            throw new NotFoundException(e);
          }
    }

    async addProductToOrder(quantity: number, orderId: number, productId: number){
        try{
            await this.prisma.productOrder.create({
                data:{
                    orderId: orderId,
                    productId: productId,
                    quantity: quantity
                }
            })
        }catch(e){
            throw new NotFoundException(e);
        }
    }

    async deleteProductFromOrder(id: number){
        try{
            await this.prisma.productOrder.delete({
                where: {id}
            });
        }catch(e){
            throw new NotFoundException(e);
        }
    }



}

