import { ProductWareModule } from './productware/productware.module';
import { WarehouseModule } from './warehouse/warehouse.module';
//import { StorageModule } from './storage/storage.module';
import { ProductModule } from './product/product.module';
import { DemoModule } from "./demo/demo.module";
import { PrismaModule } from "./prisma/prisma.module";
import { AuthModule } from "./auth/auth.module";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ProductWareModule,
    WarehouseModule,
    //StorageModule, 
    ProductModule,
    DemoModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    OrderModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
