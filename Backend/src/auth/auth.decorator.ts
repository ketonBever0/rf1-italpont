/*
https://docs.nestjs.com/openapi/decorators#decorators
*/

import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
} from "@nestjs/common";

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);

export const Roles = (...roles: string[]) => SetMetadata("roles", roles);
