import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';

@Injectable()
export class FavoriteService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllFavorite() {
    const favorite = await this.prisma.favorite.findMany({
      include: { product: true, user: true },
    });
    return {
      data: favorite,
    };
  }

  async createFavorite(data: CreateFavoriteDto, userId: string) {
    await this.prisma.favorite.create({
      data: {
        user: { connect: { id: userId } },
        product: { connect: { id: data.productId } },
      },
    });

    return { status: 'Success', message: 'Favorite created successfully' };
  }

  async deleteFavorite(id: string) {
    await this.prisma.favorite.delete({
      where: { id },
    });
  }
}
