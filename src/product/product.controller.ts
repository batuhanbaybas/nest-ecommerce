import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { NewProductDto } from './dto/new-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('all')
  async getAllProducts() {
    return await this.productService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param(':id') id: string) {
    return await this.productService.getProductById(id);
  }

  @Get('category/:id')
  async getProductByCategoryId(@Param('id') id: string) {
    return await this.productService.getProductByCategoryId(id);
  }

  @Post('create')
  async createProduct(@Body() data: NewProductDto) {
    return await this.productService.createProduct(data);
  }
}
