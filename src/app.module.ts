import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { BasketModule } from './basket/basket.module';
import { FavoriteModule } from './favorite/favorite.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ProductModule,
    BasketModule,
    FavoriteModule,
    CategoryModule,
    OrderModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ShopModule,
  ],
})
export class AppModule {}
