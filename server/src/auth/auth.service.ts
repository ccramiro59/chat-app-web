import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { verifyPassword } from '../common/utils/password.utils';
import { User } from '../user/models/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOneByUsername(username);
    return user && (await verifyPassword(password, user.password))
      ? user
      : null;
  }

  signUser(user: User) {
    const payload = { sub: user._id.toString(), username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
