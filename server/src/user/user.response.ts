import { Field, Int, ObjectType } from '@nestjs/graphql';
import PaginatedResponse from '../common/response/paginated.response';
import { User } from './models/user.entity';

@ObjectType({ description: 'User items class and total item count' })
export class UserPaginated implements PaginatedResponse<User> {
  @Field(() => [User])
  items: User[];

  @Field(() => Int)
  totalItems: number;
}
