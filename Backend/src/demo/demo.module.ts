import { DemoService } from "./demo.service";
import { DemoController } from "./demo.controller";
/*
https://docs.nestjs.com/modules
*/

import { Module } from "@nestjs/common";

@Module({
    imports: [],
    controllers: [DemoController],
    providers: [DemoService],
})
export class DemoModule {}
