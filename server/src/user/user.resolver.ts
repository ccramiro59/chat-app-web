import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ObjectId } from 'mongodb';
import { MongoIdPipe } from '../common/pipes/mongoid.pipe';
import { PaginationArgs } from '../common/args/pagination.args';
import { CreateUserDto } from './models/create-user.dto';
import { UpdateUserDto } from './models/update-user.dto';
import { User } from './models/user.entity';
import { UserPaginated } from './user.response';
import { UserService } from './user.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/graphql-guard';

@Resolver()
export class UserResolver {
  constructor(private readonly service: UserService) {}

  @Query(() => UserPaginated)
  async users(
    @Args()
    args: PaginationArgs,
  ) {
    const [items, totalItems] = await this.service.findAll(args);

    return {
      items,
      totalItems,
    };
  }

  @Query(() => User, { nullable: true })
  async user(@Args('_id', new MongoIdPipe()) id: string) {
    return this.service.findOne(new ObjectId(id));
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserDto) {
    return await this.service.createOne(data);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User, { nullable: true })
  async updateUser(
    @Args('_id', new MongoIdPipe()) id: string,
    @Args('data') data: UpdateUserDto,
  ) {
    return await this.service.updateOne(new ObjectId(id), data);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Number)
  async deleteUser(@Args('_id', new MongoIdPipe()) id: string) {
    const result = await this.service.deleteOne(new ObjectId(id));
    return typeof result === 'number' ? result : 0;
  }
}
