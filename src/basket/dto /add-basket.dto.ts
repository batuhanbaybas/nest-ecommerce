import { IsNotEmpty, IsString } from 'class-validator';

export class AddBasketDto {
  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  quantity = 1;
}
