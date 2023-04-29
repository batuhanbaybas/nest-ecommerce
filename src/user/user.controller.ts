import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { JwtAutGuard } from 'src/auth/guard/jwt.guard';
import { GetUser } from './decorator/get-user.decorator';
import { User } from '@prisma/client';
import { UpdateUSerDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@UseGuards(JwtAutGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
  @Patch(':id')
  async updateProfile(@Param('id') id: string, @Body() data: UpdateUSerDto) {
    await this.userService.updateUser(id, data);
  }

  @Delete(':id')
  async deleteProfile(@Param('id') id: string) {
    return await this.userService.deleteUser(id);
  }
}
