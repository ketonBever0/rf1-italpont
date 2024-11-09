/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Res,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { AddProductDTO, DeleteImageDTO, UpdateProductDTO } from "./dto";
import { Response } from "express";
import { AuthGuard } from "src/auth/guard/auth.guard";
import { RoleGuard } from "src/auth/guard/role.guard";
import { Roles } from "src/auth/auth.decorator";
import { FilesInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";
import * as fs from "fs";

@Controller("/product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get("/all")
  async getProducts() {
    return await this.productService.getProducts();
  }

  @Get("/get/:id")
  async getOne(@Param("id") id: string) {
    return await this.productService.getOneProduct(parseInt(id));
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Roles("ADMIN", "MODERATOR")
  @Post("/add")
  async addProduct(@Body() dto: AddProductDTO, @Res() res: Response) {
    const product = await this.productService.addProduct(dto);
    if (product) {
      res.status(200).json({ message: "Termék felvéve", product });
    } else {
      throw new NotFoundException();
    }
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Roles("ADMIN", "MODERATOR")
  @Post("/image/:id")
  @UseInterceptors(
    FilesInterceptor("images", 6, {
      storage: diskStorage({
        destination: (req, file, cb) => {
          const dir = `files/products/${req.params.id}`;
          if (!fs.existsSync(dir)) fs.mkdirSync(dir);
          cb(null, dir);
        },
        filename: async (req, file, cb) => {
          cb(
            null,
            `${req.params.id}_${Date.now()}${extname(file.originalname)}`,
          );
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
          cb(new BadRequestException("Csak kép formátum tölthető fel!"), false);
        } else {
          cb(null, true);
        }
      },
    }),
  )
  async uploadImages(
    @Param("id") id: string,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    return await this.productService.addImages(parseInt(id), files);
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Roles("ADMIN", "MODERATOR")
  @Delete("/image/:id")
  async deleteImage(@Param("id") id: string, @Body() dto: DeleteImageDTO, @Res() res: Response) {
    const deleted = await this.productService.deleteImage(
      parseInt(id),
      dto.filename,
    );
    if (deleted) {
      fs.unlinkSync(`files/products/${id}/${dto.filename}`);
      res.status(200).json({message: "Kép törölve."});
    }
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Roles("ADMIN", "MODERATOR")
  @Patch("/update/:id")
  async updateProduct(
    @Param("id") id: string,
    @Body() dto: UpdateProductDTO,
    @Res() res: Response,
  ) {
    const product = await this.productService.updateProduct(parseInt(id), dto);
    res.status(200).json({ message: "Termék módosítva", product });
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Roles("ADMIN", "MODERATOR")
  @Delete("/delete/:id")
  async deleteProduct(@Param("id") id: string, @Res() res: Response) {
    const result = await this.productService.deleteProduct(parseInt(id));
    res.status(200).json(result);
  }
}
