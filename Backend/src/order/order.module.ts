import { JwtModule } from '@nestjs/jwt';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [JwtModule],
    controllers: [
        OrderController,],
    providers: [
        OrderService,],
})
export class OrderModule { }