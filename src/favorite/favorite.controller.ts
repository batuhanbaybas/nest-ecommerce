import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { JwtAutGuard } from 'src/auth/guard/jwt.guard';
import { Request } from 'express';

@UseGuards(JwtAutGuard)
@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}
  @Get('all')
  async getAllFavorite() {
    return await this.favoriteService.getAllFavorite();
  }
  @Post('create')
  async createFavorite(@Body() data: CreateFavoriteDto, @Req() req: any) {
    return await this.favoriteService.createFavorite(data, req.user.id);
  }

  @Delete(':id')
  async deleteFavorite(@Param('id') id: string) {
    return await this.favoriteService.deleteFavorite(id);
  }
}
