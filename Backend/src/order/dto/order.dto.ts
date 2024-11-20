import { IsArray, IsDate, IsInt, isNotEmpty, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AddOrderDTO{
    @IsNotEmpty()
    @IsString()
    postcode: string

    @IsNotEmpty()
    @IsString()
    city: string

    @IsNotEmpty()
    @IsString()
    address: string

    @IsNotEmpty()
    @IsInt()
    price: number

    @IsNotEmpty()
    @IsInt()
    userId: number

    @IsNotEmpty()
    @IsArray()
    products: Array<any>

}

export class UpdateOrderDTO{
    @IsNotEmpty()
    @IsString()
    postcode: string

    @IsNotEmpty()
    @IsString()
    city: string

    @IsNotEmpty()
    @IsString()
    address: string

    @IsNotEmpty()
    @IsInt()
    price: number

    @IsNotEmpty()
    @IsInt()
    userId: number

}