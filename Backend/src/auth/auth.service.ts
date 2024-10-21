/*
https://docs.nestjs.com/providers#services
*/

import {
  BadRequestException,
  Body,
  ForbiddenException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { LoginDto, RegistrationDto, UpdateMeDto, UpdatePasswordDto } from "./dto";
import * as argon from "argon2";
import { Role, User } from "@prisma/client";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signToken(user: User) {
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    return this.jwt.signAsync(payload, {
      expiresIn: "30m",
      secret: this.config.get("JWT_SECRET"),
    });
  }

  async login(dto: LoginDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });

      if (user) {
        if (await argon.verify(user.password, dto.password)) {
          const token = await this.signToken(user);
          delete user.password;
          return { token, user };
        } else {
          throw new ForbiddenException("Incorrect password!");
        }
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async registration(dto: RegistrationDto) {
    const hash = await argon.hash(dto.password);
    try {
      const user = await this.prisma.user.create({
        data: {
          ...dto,
          role: Role.USER,
          password: hash,
          birthDate: new Date(dto.birthDate),
        },
      });

      if (user) {
        delete user.password;
        return user;
      }
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findByOne(id: number, email: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: id, email: email },
    });
    if (!user) throw new NotFoundException("User not found!");
    delete user.password;
    return user;
  }

  async updateMe(id: number, email: string, dto: UpdateMeDto) {
    const user = await this.prisma.user.update({
      where: { id: id, email: email },
      data: dto,
    });
    delete user.password;
    return { message: "User updated!", user };
  }

  // TODO: Create updatePassword function
  // async updatePassword(id: number, email: string, dto: UpdatePasswordDto) {
  //   const user = await 
  // }

  async findAll() {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        lastName: true,
        firstName: true,
        birthDate: true,
        password: false,
        nick: true,
        postcode: true,
        city: true,
        address: true,
        mobile: true,
      },
    });
  }
}
