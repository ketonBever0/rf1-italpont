/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  HttpStatus,
  NotFoundException,
  Post,
  Res,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto, RegistrationDto } from "./dto";
import { Response } from "express";

@Controller("/auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/registration")
  async registration(@Body() dto: RegistrationDto, @Res() res: Response) {
    const user = await this.authService.registration(dto);

    if (user) {
      return res.status(HttpStatus.CREATED).json({
        message: "User created!",
        user,
      });
    }
  }

  @Post("/login")
  async login(@Body() dto: LoginDto, @Res() res: Response) {
    const user = await this.authService.login(dto);

    if (user) {
      return res.status(200).json(user);
    } else {
      throw new NotFoundException({ message: "User not found!" });
    }
  }
}
