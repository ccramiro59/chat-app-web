import { NotFoundException } from '@nestjs/common';

export function userNotFound() {
  return new NotFoundException('User not found');
}
