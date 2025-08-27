import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userRepository } from './user.repository';
import { DatabaseModule } from 'src/database/database.module';
import { UserResolver } from './user.resolver';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...userRepository, UserService, UserResolver],
})
export class UserModule {}
