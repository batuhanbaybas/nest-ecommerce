import { AuthGuard } from '@nestjs/passport';

export class JwtAutGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
