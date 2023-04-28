import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAutGuard } from 'src/auth/guard/jwt.guard';
import { GetUser } from './decorator/get-user.decorator';
import { User } from '@prisma/client';

@UseGuards(JwtAutGuard)
@Controller('user')
export class UserController {
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
}
