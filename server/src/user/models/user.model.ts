import { Field, ObjectType } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { isObjectId } from 'src/common/utils/mongo.utils';

@ObjectType({ description: 'User Model' })
export class User {
  @Field()
  @Transform(
    ({ value }) => {
      if (isObjectId(value)) {
        return value.toString();
      }
    },
    { toPlainOnly: true },
  )
  _id: string;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  emailAddress: string | null;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  displayName: string;

  @Field()
  dateOfBirth: Date | null;

  @Field()
  joinDate: Date;

  @Field()
  updatedAt: Date;
}
