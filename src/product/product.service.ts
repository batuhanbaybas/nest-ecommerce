import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NewProductDto } from './dto/new-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllProducts(page: number) {
    const product = await this.prisma.product.findMany({
      take: 10,
      skip: (page - 1) * 10,
      include: { category: true },
    });

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

  async createProduct(data: NewProductDto) {
    await this.prisma.product.create({
      data: { ...data, category: { connect: { id: data.category } } },
    });

    return { status: 'Success', message: 'Product created successfully' };
  }

  async updateProductById(id: string, data: NewProductDto) {
    await this.prisma.product.update({
      where: { id },
      data: { ...data, category: { connect: { id: data.category } } },
    });
    return { status: 'Success', message: 'Product updated successfully' };
  }

  async deleteProductById(id: string) {
    await this.prisma.product.delete({
      where: { id },
    });

    return { status: 'Success', message: 'Product deleted successfully' };
  }
}
