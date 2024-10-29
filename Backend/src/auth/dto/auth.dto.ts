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

export class RegistrationDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsDateString()
  birthDate: Date;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsOptional()
  // @ValidateIf(
  //   (o, value: string) => value !== null && value !== undefined && value !== "",
  // )
  // @IsNotEmpty()
  @IsString()
  nick?: string;

  @IsNotEmpty()
  @IsString()
  postcode: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  address: string;

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
