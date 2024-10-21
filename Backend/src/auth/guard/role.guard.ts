/*
https://docs.nestjs.com/guards#guards
*/

import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { User as UserModel } from "@prisma/client";
import { Observable } from "rxjs";
import { User } from "../auth.decorator";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.get<string[]>(
      "roles",
      context.getHandler(),
    );
    if (!requiredRoles) return true;

    const req = context.switchToHttp().getRequest();
    const userRole = await this.prisma.user.findUnique({
      where: { id: req.user.sub },
      select: { role: true },
    });
    // console.log(userRole);
    return requiredRoles.includes(userRole.role);
  }
}
