import {
  Get,
  Post,
  Body,
  Controller,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { PaginationDto } from '../common/dto/pagination.dto';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(
    @Query(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    query: PaginationDto,
  ) {
    const [data, count] = await this.userService.findAll(query);

    return { data, count };
  }

  @Post()
  async createOne(
    @Body(new ValidationPipe({ transform: true })) dto: CreateUserDto,
  ) {
    return await this.userService.createOne(dto);
  }
}
