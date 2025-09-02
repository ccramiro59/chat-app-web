import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ObjectId } from 'mongodb';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { userUnauthorized } from '../common/exceptions/user.exception';
import { UserService } from '../user/user.service';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: { sub: string; username: string }) {
    const user = await this.userService.findOne(new ObjectId(payload.sub));

    if (!user) throw userUnauthorized();

    return {
      _id: payload.sub,
      username: payload.username,
      message: 'this is from JwtStrategy.validate',
    };
  }
}
