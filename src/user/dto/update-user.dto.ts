import { IsEmail, IsString } from 'class-validator';

export class UpdateUSerDto {
  @IsEmail()
  email?: string;

  @IsString()
  password?: string;

  @IsString()
  name?: string;

  @IsString()
  surname?: string;
}
