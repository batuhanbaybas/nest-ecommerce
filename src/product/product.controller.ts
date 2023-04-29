import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { NewProductDto } from './dto/new-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('all')
  async getAllProducts(@Query('page') page = 1) {
    return await this.productService.getAllProducts(page);
  }

  @Get(':id')
  async getProductById(@Param(':id') id: string) {
    return await this.productService.getProductById(id);
  }

  @Patch(':id')
  async updateProductById(
    @Param('id') id: string,
    @Body() data: NewProductDto,
  ) {
    return await this.productService.updateProductById(id, data);
  }

  @Get('category/:id')
  async getProductByCategoryId(@Param('id') id: string) {
    return await this.productService.getProductByCategoryId(id);
  }

  @Post('create')
  async createProduct(@Body() data: NewProductDto) {
    return await this.productService.createProduct(data);
  }

  @Delete(':id')
  async deleteProductById(@Param('id') id: string) {
    return await this.productService.deleteProductById(id);
  }
}
