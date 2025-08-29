import { IsInt, IsOptional, Max, Min } from 'class-validator';

export class PaginationDto {
  @Min(1)
  @IsInt()
  @IsOptional()
  page: number = 1;

  @Min(5)
  @Max(100)
  @IsInt()
  @IsOptional()
  items: number = 100;
}
