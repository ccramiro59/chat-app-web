import { Transform } from 'class-transformer';
import { isObjectId } from '../../common/utils/mongo.utils';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';

import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectId,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType({ description: 'User Class' })
export class User {
  @Transform(
    ({ value }) => {
      if (isObjectId(value)) {
        return value.toString();
      }
    },
    { toPlainOnly: true },
  )
  @ObjectIdColumn()
  @Field(() => ID, { nullable: true })
  _id: ObjectId | null;

  @Column({ unique: true, update: false })
  @Field()
  username: string;

  @Exclude({ toPlainOnly: true })
  @Column()
  password: string;

  @Column({ unique: true, nullable: true })
  @Field(() => String, { nullable: true })
  emailAddress: string | null;

  @Column({ length: 50 })
  @Field(() => String, { nullable: true })
  firstName: string | null;

  @Column({ length: 50 })
  @Field(() => String, { nullable: true })
  lastName: string | null;

  @Column({ length: 50 })
  @Field(() => String, { nullable: true })
  displayName: string | null;

  @Column({ type: 'date', nullable: true })
  @Field(() => Date, { nullable: true })
  dateOfBirth: Date | null;

  @CreateDateColumn()
  @Field()
  joinDate: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;
}
