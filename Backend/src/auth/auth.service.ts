/*
https://docs.nestjs.com/providers#services
*/

import {
  BadRequestException,
  Body,
  ForbiddenException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import {
  LoginDto,
  RegistrationDto,
  UpdateUserDto,
  UpdatePasswordDto,
} from "./dto";
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
      throw new InternalServerErrorException();
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
      throw new ForbiddenException(error);
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

  async updateUser(id: number, email: string, dto: UpdateUserDto) {
    const user = await this.prisma.user.update({
      where: { id: id, email: email },
      data: {
        // email: dto.email,
        lastName: dto.lastName,
        firstName: dto.firstName,
        birthDate: dto.birthDate,
        nick: dto.nick,
        postcode: dto.postcode,
        city: dto.city,
        address: dto.address,
        mobile: dto.mobile,
      },
    });
    delete user.password;
    return { message: "User updated!", user };
  }

  async updatePassword(user: User, dto: UpdatePasswordDto) {
    const authUser = await this.prisma.user.findUnique({
      where: {
        id: user.id,
        email: user.email,
      },
      select: { password: true },
    });
    if (await argon.verify(authUser.password, dto.password)) {
      if (dto.password == dto.newPassword)
        throw new BadRequestException("New password cannot be same as old!");
      const hash = await argon.hash(dto.newPassword);
      await this.prisma.user.update({
        where: {
          id: user.id,
          email: user.email,
        },
        data: {
          password: hash,
        },
      });
      return { message: "Password updated!" };
    } else {
      throw new ForbiddenException("Old password is incorrect!");
    }
  }

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

  async getRole(id: number) {
    return (await this.prisma.user.findUnique({where: {id: id}, select: {role: true}})).role;
  }

  async changeRole(id: number, role: Role) {
    await this.prisma.user.update({
      where: { id: id },
      data: { role: role },
    });
    return { message: "Felhasználó rangja megváltozott" };
  }

}
