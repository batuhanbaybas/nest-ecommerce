import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';

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

  async createCategory(data: CreateCategoryDto) {
    return await this.prisma.category.create({
      data: { ...data },
    });
  }
}
