import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddBasketDto } from './dto /add-basket.dto';

@Injectable()
export class BasketService {
  constructor(private readonly prisma: PrismaService) {}

  async getBasket() {
    const basket = await this.prisma.basket.findMany({
      include: { product: true, user: true },
    });
    return {
      data: basket,
    };
  }

  async addBasket(data: AddBasketDto, userId: string) {
    await this.prisma.basket.create({
      data: {
        quantity: data.quantity,
        user: { connect: { id: userId } },
        product: { connect: { id: data.productId } },
      },
    });
  }

  async deleteBasket(id: string) {
    await this.prisma.basket.delete({
      where: { id },
    });
  }
}
