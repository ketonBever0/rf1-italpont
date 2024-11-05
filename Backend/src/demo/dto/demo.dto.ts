import { IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

//  Ez validálja a beérkező JSON-t
export class DemoPostDto {

    //  Kötelező szöveg
    @IsNotEmpty()
    @IsString()
    title: string;

    //  Kötelező dátumformátumú szöveg ("YYYY-MM-DD")
    @IsNotEmpty()
    @IsDateString()
    when: string;

    @IsNotEmpty()
    @IsInt()
    priority: number;

    //  Nem kötelező, de ha megadjuk, string-nek kell lennie
    @IsOptional()
    @IsString()
    description: string;

}