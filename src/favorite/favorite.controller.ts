import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';

@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}
  @Get('all')
  async getAllFavorite() {
    return await this.favoriteService.getAllFavorite();
  }
  @Post('create')
  async createFavorite(@Body() data: CreateFavoriteDto) {
    return await this.favoriteService.createFavorite(data);
  }

  @Delete(':id')
  async deleteFavorite(@Param('id') id: string) {
    return await this.favoriteService.deleteFavorite(id);
  }
}
