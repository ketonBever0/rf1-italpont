import { PrismaService } from './prisma.service';
import { Global, Module } from '@nestjs/common';

/*
https://docs.nestjs.com/modules
*/

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
