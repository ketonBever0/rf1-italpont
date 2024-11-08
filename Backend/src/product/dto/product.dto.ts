import { IsInt, IsNotEmpty, IsString } from "class-validator";

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

    @IsNotEmpty()
    @IsInt()
    discount: number;

    @IsNotEmpty()
    @IsInt()
    volume: number;

    @IsNotEmpty()
    @IsInt()
    alcoholPercentage: number;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    images: string;

    @IsNotEmpty()
    @IsInt()
    price: number;

}

export class UpdateProductDTO {
    name?: string;
    category?: string;
    subCategory?: string;
    brand?: string;
    discount?: number;
    volume?: number;
    alcoholPercentage?: number;
    description?: string;
    images?: string;
    price?: number;
}