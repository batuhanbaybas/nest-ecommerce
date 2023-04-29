import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { JwtAutGuard } from 'src/auth/guard/jwt.guard';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Get('all')
  async getAllCategories() {
    return await this.categoryService.getAllCategories();
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

  @Post('create')
  async createCategory(@Body() data: CreateCategoryDto) {
    await this.categoryService.createCategory(data);
  }
}
