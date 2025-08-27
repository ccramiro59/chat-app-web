import { Transform, TransformFnParams } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsDate,
  IsAlpha,
  IsAlphanumeric,
} from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: 'Create User Data Object' })
export class CreateUserDto {
  @IsAlphanumeric()
  @IsNotEmpty()
  @Field()
  username: string;

  @IsNotEmpty()
  @Field()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  @Field()
  emailAddress: string;

  @IsOptional()
  @IsAlpha()
  @Field(() => String, { nullable: true })
  firstName: string;

  @IsOptional()
  @IsAlpha()
  @Field(() => String, { nullable: true })
  lastName: string;

  @IsOptional()
  @IsAlpha()
  @Field(() => String, { nullable: true })
  displayName: string;

  @IsOptional()
  @Transform(({ value }: TransformFnParams) => {
    if (typeof value == 'string') {
      return new Date(value);
    }

    return null;
  })
  @IsDate()
  @Field(() => Date, { nullable: true })
  dateOfBirth: Date | null;
}
