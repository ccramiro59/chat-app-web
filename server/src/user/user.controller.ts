import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { PaginationDto } from '../common/dto/pagination.dto';
import { userNotFound } from '../common/exceptions/user.exception';
import { MongoIdPipe } from '../common/pipes/mongoid.pipe';
import { CreateUserDto } from './models/create-user.dto';
import { UpdateUserDto } from './models/update-user.dto';
import { User } from './models/user.entity';
import { UserPaginated } from './user.response';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(
    @Query()
    query: PaginationDto,
  ): Promise<UserPaginated> {
    const [items, totalItems] = await this.userService.findAll(query);
    return { items, totalItems };
  }

  @Get(':id')
  async findOne(@Param('id', new MongoIdPipe()) id: string): Promise<User> {
    const user = await this.userService.findOne(new ObjectId(id));

    if (!user) throw userNotFound();

    return user;
  }

  @Post()
  async createOne(@Body() dto: CreateUserDto): Promise<User> {
    return this.userService.createOne(dto);
  }

  @Put(':id')
  async updateOne(
    @Param('id', new MongoIdPipe()) id: string,
    @Body() dto: UpdateUserDto,
  ): Promise<User | null> {
    const user = await this.userService.updateOne(new ObjectId(id), dto);

    if (!user) throw userNotFound();

    return user;
  }

  @Delete(':id')
  async deleteOne(
    @Param('id', new MongoIdPipe()) id: string,
  ): Promise<{ affected: number }> {
    const rowsAffected = await this.userService.deleteOne(new ObjectId(id));

    if (typeof rowsAffected == 'number' && rowsAffected > 0) {
      return { affected: rowsAffected };
    }

    throw userNotFound();
  }
}
