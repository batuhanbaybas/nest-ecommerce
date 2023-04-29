import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllCategories() {
    const category = await this.prisma.category.findMany();

    return {
      data: category,
    };
  }

  async getCategoryById(id: string) {
    return await this.prisma.category.findUnique({
      where: { id },
    });
  }

  async deleteCategoryById(id: string) {
    return await this.prisma.category.delete({
      where: { id },
    });
  }
}
