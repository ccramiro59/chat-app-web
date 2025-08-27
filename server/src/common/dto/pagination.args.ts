import { Field, ArgsType } from '@nestjs/graphql';
import { IsOptional, IsInt, Min, Max } from 'class-validator';

@ArgsType()
export class PaginationDto {
  @Field()
  @Min(1)
  @IsInt()
  @IsOptional()
  page: number = 1;

  @Field()
  @Max(100)
  @Min(5)
  @IsInt()
  @IsOptional()
  items: number = 100;
}
