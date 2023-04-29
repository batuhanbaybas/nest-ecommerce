import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NewProductDto } from './dto/new-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllProducts() {
    const product = await this.prisma.product.findMany();

    return {
      data: product,
    };
  }

  async getProductById(id: string) {
    return await this.prisma.product.findUnique({
      where: { id },
    });
  }

  async getProductByCategoryId(id: string) {
    return await this.prisma.product.findMany({
      where: { categoryId: id },
    });
  }

  async createProduct(data, id: string) {
    return await this.prisma.product.create({
      data: {
        ...data,
        category: {
          connect: {
            id,
          },
        },
      },
    });
  }
  æ;
}
