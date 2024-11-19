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

@Module({
  imports: [
        WarehouseModule, 
        //StorageModule, 
        ProductModule, 
    DemoModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
