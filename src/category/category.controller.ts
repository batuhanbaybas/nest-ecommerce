import { Controller, Delete, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Get('all')
  async getAllCategories() {
    await this.categoryService.getAllCategories();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    await this.categoryService.getCategoryById(id);
  }

  @Delete(':id')
    async deleteCategoryById(@Param('id') id: string) {
    await this.categoryService.deleteCategoryById(id);
}
