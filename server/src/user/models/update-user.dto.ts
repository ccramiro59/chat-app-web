import { Field, ID, InputType } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, Matches } from 'class-validator';
import { ObjectId } from 'mongodb';

@InputType({ description: 'Update User Data Object' })
export class UpdateUserDto {
  // @Transform(({ value }: { value: string }) => new ObjectId(value), {
  //   toClassOnly: true,
  // })
  // @IsNotEmpty()
  // @Field(() => ID)
  // _id: ObjectId;

  @Matches(/^[A-Za-z\s]*$/, {
    message: 'First name should contain letters or with spaces',
  })
  @IsOptional()
  @Transform(({ value }: { value: string | null }) => value?.trim())
  @Field(() => String, { nullable: true })
  firstName: string | null;

  @Matches(/^[A-Za-z\s]*$/, {
    message: 'Last name should contain letters or with spaces',
  })
  @IsOptional()
  @Transform(({ value }: { value: string | null }) => value?.trim())
  @Field(() => String, { nullable: true })
  lastName: string | null;

  @Matches(/^[A-Za-z\s]*$/, {
    message: 'Display name should contain letters or with spaces',
  })
  @IsOptional()
  @Transform(({ value }: { value: string | null }) => value?.trim())
  @Field(() => String, { nullable: true })
  displayName: string | null;

  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'Date must be in YYYY-MM-DD format',
  })
  @IsOptional()
  @Transform(({ value }: { value: string | null }) => value?.trim())
  @Field(() => String, { nullable: true })
  dateOfBirth: string | null;
}
