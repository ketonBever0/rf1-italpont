/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from "@nestjs/common";
import { DemoService } from "./demo.service";
import { Response } from "express";
import { DemoPostDto } from "./dto";

// Ide adjunk meg egy fő route-ot
@Controller("/demo")
export class DemoController {
  constructor(private demoService: DemoService) {}

  // GET "/demo/test"
  @Get("/test")
  async get(@Res() res: Response) {
    return res.status(200).json(await this.demoService.getMethod());
  }

  // GET "/demo/test"
  @Post("/test")
  //                 ˇˇ elérjük a DTO-t       ˇˇ definiáljuk a válasz objektumot
  async post(@Body() dto: DemoPostDto, @Res() res: Response) {
    return res
      .status(200)
      .json(await this.demoService.postMethod(dto));
  }

  @Patch("/test")
  //  Itt készíthetünk saját DTO-t, nem muszáj
  async patch(@Body() dto: DemoPostDto, @Res() res: Response) {}

  //  Itt route paraméterben kapja meg a törlendő adat címét
  @Delete("/test/:title")
  async delete(@Param() params: any, @Res() res: Response) {
    // console.log(params.id);
    return res.status(200).json(await this.demoService.deleteMethod(params.id));
  }
}
