/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DemoPostDto } from './dto';

@Injectable()
export class DemoService {
    constructor(private prisma: PrismaService) {}

    //  Itt kaphat paramétert pl lekérdezési feltétel
    async getMethod() {
        return { message: "Get" };
    }

    //  Megkapja a DTO-t (nem itt történik a validálás)
    async postMethod(dto: DemoPostDto) {
        return { message: "DTO is OK, POST method" };
    }

    async patchMethod(dto: DemoPostDto) {
        return { message: "DTO is OK, PATCH method" };
    }

    //  Itt kapja meg a paramétert
    async deleteMethod(title: string) {
        return { message: "DELETE method" };
    }

}
