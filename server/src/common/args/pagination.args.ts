import { Field, ArgsType, Int } from '@nestjs/graphql';
import { IsOptional, IsInt, Min, Max } from 'class-validator';

@ArgsType()
export class PaginationArgs {
  @Min(1)
  @IsInt()
  @IsOptional()
  @Field(() => Int)
  page: number = 1;

  @Max(100)
  @Min(5)
  @IsInt()
  @IsOptional()
  @Field(() => Int)
  items: number = 100;
}
