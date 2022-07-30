import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { randomInt } from 'crypto';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { ResponseFindProductsDto } from './dto/response-find-products.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    if (!createProductDto.id) {
      let id = randomInt(1, 999999999999);
      while (await this.findOne(id)) {
        id = randomInt(1, 999999999999);
      }
      createProductDto.id = id;
    }
    return this.productModel.create(createProductDto);
  }

  async findAll(
    perPage: number = 10,
    page: number = 1,
    searchField?: string,
    search?: string,
  ): Promise<ResponseFindProductsDto> {
    const query = this.productModel.find({});
    if (searchField && search) {
      query
        .where(searchField)
        .equals({ $regex: search.toLocaleLowerCase(), $options: 'i' });
    }
    const total = await query.clone().countDocuments().exec();

    const data = await query
      .clone()
      .skip((perPage - 1) * page)
      .limit(page)
      .exec();

    return { total, data };
  }

  async findOne(id: number): Promise<Product> {
    return this.productModel.findOne({ id });
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productModel.findOneAndUpdate({ id }, updateProductDto);
  }

  remove(id: number) {
    return this.productModel.findOneAndDelete({ id });
  }
}
