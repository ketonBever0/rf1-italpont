import { Exclude, Expose } from "class-transformer";
import {
  IsDate,
  IsDateString,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  NotEquals,
  ValidateIf,
} from "class-validator";

@Exclude()
export class RegistrationDto {
  @Expose()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @Expose()
  @IsDateString()
  birthDate: Date;

  @Expose()
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @Expose()
  @IsOptional()
  // @ValidateIf(
  //   (o, value: string) => value !== null && value !== undefined && value !== "",
  // )
  // @IsNotEmpty()
  @IsString()
  nick?: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  postcode: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  city: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  address: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  mobile: string;
}

export class LoginDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class UpdateUserDto {

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsDateString()
  birthDate: Date;

  @IsOptional()
  @IsString()
  nick: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  postcode: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  city: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  mobile: string;
}

export class UpdatePasswordDto {
  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  newPassword: string;
}
