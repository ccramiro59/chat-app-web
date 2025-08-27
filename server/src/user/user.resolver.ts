import { Mutation, Query, Resolver, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { PaginationDto } from '../common/dto/pagination.args';

@Resolver()
export class UserResolver {
  constructor(private readonly service: UserService) {}

  @Query(() => [User])
  async users(@Args() args: PaginationDto) {
    const [data] = await this.service.findAll(args);
    return data;
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserDto) {
    return await this.service.createOne(data);
  }
}
