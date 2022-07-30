import { CanActivate } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { JwtAuthGuard } from '../../auth/guards/jwt.guard';
import { ProductsService } from '../products.service';

describe('ProductsService', () => {
  let productsService: ProductsService;

  function moc_ProductModel(dto: any) {
    this.data = dto;
    this.save = () => {
      return this.data;
    };
    this.find = () => {
      return this.data;
    };
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getModelToken('Product'),
          useValue: moc_ProductModel,
        },
      ],
    }).compile();

    productsService = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(productsService).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const products = [{ id: '1', name: 'test' }];

      jest.spyOn(productsService, 'findAll').mockImplementation(async () => {
        return products;
      });

      expect(await service.findAll()).toEqual(products);
    });
  });
});
