import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class NewProductDto {
  @ApiProperty({ description: 'Product name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Description' })
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({ description: 'Quantity' })
  @IsOptional()
  @IsNumber()
  quantity: number;

  @ApiProperty({ description: 'Image URL' })
  @IsOptional()
  @IsString()
  image: string;

  @ApiProperty({ description: 'Price' })
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @ApiProperty({ description: 'Category ID' })
  @IsNotEmpty()
  @IsString()
  category: string;
}
