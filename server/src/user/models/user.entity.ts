import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Exclude, Transform } from 'class-transformer';

import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

import { IsOptional, Matches } from 'class-validator';
import { ObjectId } from 'mongodb';
import { hashPassword } from '../../common/utils/password.utils';

@Entity()
@ObjectType({ description: 'User Class' })
export class User {
  @Transform(({ value }: { value: ObjectId }) => value.toString(), {
    toPlainOnly: true,
  })
  @ObjectIdColumn({ primary: true })
  @Field(() => ID)
  _id: ObjectId;

  @Column({
    type: 'enum',
    enum: ['admin', 'standard'],
    default: 'standard',
  })
  @Field()
  type: string = 'standard';

  @Exclude({ toPlainOnly: true })
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

  @Column({ length: 10, nullable: true })
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'Date must be in YYYY-MM-DD format',
  })
  @IsOptional()
  @Field(() => String, { nullable: true })
  dateOfBirth: string | null;

  @CreateDateColumn()
  @Field()
  joinDate: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hashPassword(this.password);
  }
}
