import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import express from 'express';
import { User } from 'src/user/models/user.entity';
import { LocalAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: express.Request) {
    const user = req.user as User;
    return this.authService.signUser(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('logout')
  logout(@Request() req: express.Request) {
    console.log('[REQUEST_LOGOUT]');
    return req.logout(() => {});
  }
}
