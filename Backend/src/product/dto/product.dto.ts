import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AddProductDTO{
    
    @IsNotEmpty()
    @IsString()
    name: string;


    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    @IsString()
    subCategory: string;

    @IsNotEmpty()
    @IsString()
    brand: string;

    @IsOptional()
    @IsInt()
    discount?: number;

    @IsNotEmpty()
    @IsInt()
    volume: number;

    @IsNotEmpty()
    @IsInt()
    alcoholPercentage: number;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    images?: string;

    @IsNotEmpty()
    @IsInt()
    price: number;

}

export class UpdateProductDTO {


    @IsNotEmpty()
    @IsString()
    name: string;


    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    @IsString()
    subCategory: string;

    @IsNotEmpty()
    @IsString()
    brand: string;

    @IsOptional()
    @IsInt()
    discount?: number;

    @IsNotEmpty()
    @IsInt()
    volume: number;

    @IsNotEmpty()
    @IsInt()
    alcoholPercentage: number;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    images: string;

    @IsNotEmpty()
    @IsInt()
    price: number;
}