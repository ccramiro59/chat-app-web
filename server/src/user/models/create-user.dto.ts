import { Field, InputType } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType({ description: 'Create User Data Object' })
export class CreateUserDto {
  @IsAlphanumeric()
  @IsNotEmpty()
  @Transform(({ value }: { value: string | null }) => value?.trim())
  @Field(() => String)
  username: string;

  @MinLength(8)
  @MaxLength(128)
  @IsAlphanumeric()
  @IsNotEmpty()
  @Transform(({ value }: { value: string | null }) => value?.trim())
  @Field(() => String)
  password: string;

  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }: { value: string | null }) => value?.trim())
  @Field(() => String)
  emailAddress: string;

  @Matches(/[A-Za-z\s]+/, {
    message: 'First name should contain letters or with spaces',
  })
  @IsOptional()
  @Transform(({ value }: { value: string | null }) => value?.trim())
  @Field(() => String, { nullable: true })
  firstName: string;

  @Matches(/[A-Za-z\s]+/, {
    message: 'Last name should contain letters or with spaces',
  })
  @IsOptional()
  @Transform(({ value }: { value: string | null }) => value?.trim())
  @Field(() => String, { nullable: true })
  lastName: string;

  @Matches(/[A-Za-z\s]+/, {
    message: 'Display name should contain letters or with spaces',
  })
  @IsOptional()
  @Transform(({ value }: { value: string | null }) => value?.trim())
  @Field(() => String, { nullable: true })
  displayName: string;

  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'Date must be in YYYY-MM-DD format',
  })
  @IsOptional()
  @Transform(({ value }: { value: string | null }) => value?.trim())
  @Field(() => String, { nullable: true })
  dateOfBirth: string | null;
}
