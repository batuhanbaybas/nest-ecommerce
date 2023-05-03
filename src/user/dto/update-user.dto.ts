import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class UpdateUSerDto {
  @ApiProperty({ description: 'Email' })
  @IsEmail()
  email?: string;

  @ApiProperty({ description: 'Password' })
  @IsString()
  password?: string;

  @ApiProperty({ description: 'Name' })
  @IsString()
  name?: string;

  @ApiProperty({ description: 'Surname' })
  @IsString()
  surname?: string;
}
