import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argo from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async login(data) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (!user) {
      throw new ForbiddenException('User not found!');
    }
    // compare password
    const isMatch = await argo.verify(user.password, data.password);
    if (!isMatch) {
      throw new ForbiddenException('Password incorrect!');
    }
    delete user.password;
    // take access token
    return this.signToken(user.id, user.email);
  }

  async register(data) {
    const password = await argo.hash(data.password);
    try {
      const user = await this.prisma.user.create({
        data: {
          ...data,
          password,
        },
      });
      delete data.password;
      return this.signToken(user.id, user.email);
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ForbiddenException('User already exists!');
      }
    }
  }
  async signToken(
    userID: string,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = { sub: userID, email };
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '1d',
      secret: this.config.get('JWT_SECRET'),
    });
    return { access_token: token };
  }
}
