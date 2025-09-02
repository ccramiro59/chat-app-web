import { Field } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import {
  IsAlphanumeric,
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthDto {
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
}
