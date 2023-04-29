import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { JwtAutGuard } from 'src/auth/guard/jwt.guard';

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
  @UseGuards(JwtAutGuard)
  @Delete(':id')
  async deleteCategoryById(@Param('id') id: string) {
    await this.categoryService.deleteCategoryById(id);
  }
}
