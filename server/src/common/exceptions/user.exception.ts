import { NotFoundException, UnauthorizedException } from '@nestjs/common';

export function userNotFound() {
  return new NotFoundException('User not found');
}

export function userUnauthorized() {
  return new UnauthorizedException('User unauthorized');
}
