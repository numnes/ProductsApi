import { Product } from '../entities/product.entity';

export class ResponseFindProductsDto {
  total: number;
  data: Product[];
}
