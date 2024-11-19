/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Res,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import {
  LoginDto,
  RegistrationDto,
  UpdateUserDto,
  UpdatePasswordDto,
} from "./dto";
import { Response } from "express";
import { Roles, User } from "./auth.decorator";
import { AuthGuard } from "./guard/auth.guard";
import { RoleGuard } from "./guard/role.guard";
import { Role, User as UserModel } from "@prisma/client";
import { plainToInstance } from "class-transformer";

@Controller("/auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/registration")
  async registration(@Body() dto: RegistrationDto, @Res() res: Response) {
    const user = await this.authService.registration(
      plainToInstance(RegistrationDto, dto, { excludeExtraneousValues: true }),
    );

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

  @Get("/all")
  @UseGuards(AuthGuard, RoleGuard)
  @Roles("ADMIN", "MODERATOR")
  async getAll() {
    return this.authService.findAll();
  }

  @Get("/me")
  @UseGuards(AuthGuard)
  async getMe(@User() user: UserModel) {
    // console.log(user);
    return await this.authService.findByOne(user.id, user.email);
  }

  @Patch("/me")
  @UseGuards(AuthGuard)
  async updateMe(@User("id") user: any, @Body() dto: UpdateUserDto) {
    return await this.authService.updateUser(user.id, user.email, dto);
  }

  @Patch("/password")
  @UseGuards(AuthGuard)
  async updatePassword(@User("id") user: any, @Body() dto: UpdatePasswordDto) {
    return await this.authService.updatePassword(user, dto);
  }

  @Patch("/moderator/:id")
  @UseGuards(AuthGuard, RoleGuard)
  @Roles("ADMIN")
  async giveModerator(@Param("id") id: string, res: Response) {
    if ((await this.authService.getRole(parseInt(id))) == Role.ADMIN)
      throw new ForbiddenException({
        message: "Admint nem tehetsz moderátorrá!",
      });
    return await this.authService.changeRole(parseInt(id), Role.MODERATOR);
  }

  @Delete("/moderator/:id")
  @UseGuards(AuthGuard, RoleGuard)
  @Roles("ADMIN")
  async revokeModerator(@Param("id") id: string, res: Response) {
    if ((await this.authService.getRole(parseInt(id))) == Role.ADMIN)
      throw new ForbiddenException({
        message: "Admint nem tehetsz mezei felhasználóvá!",
      });
    return await this.authService.changeRole(parseInt(id), Role.USER);
  }
}
