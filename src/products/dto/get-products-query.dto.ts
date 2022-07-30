import { IsNumber, IsOptional } from 'class-validator';

export class GetProductsQueryDto {
  @IsNumber()
  @IsOptional()
  per_page?: number;

  @IsNumber()
  @IsOptional()
  page?: number;

  @IsOptional()
  search_field?: string;

  @IsOptional()
  search?: string;
}
