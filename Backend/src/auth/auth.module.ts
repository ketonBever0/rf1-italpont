import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
/*
https://docs.nestjs.com/modules
*/

import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [PrismaModule, JwtModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
