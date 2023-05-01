import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { BasketService } from './basket.service';
import { AddBasketDto } from './dto /add-basket.dto';

@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}
  @Get()
  async getBasket() {
    return await this.basketService.getBasket();
  }

  @Post('add')
  async addBasket(@Body() data: AddBasketDto, @Req() req: any) {
    return await this.basketService.addBasket(data, req.user.id);
  }

  @Delete('delete/:id')
  async deleteBasket(@Param('id') id: string) {
    return await this.basketService.deleteBasket(id);
  }
}
