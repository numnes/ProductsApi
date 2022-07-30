import { CanActivate } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { JwtAuthGuard } from '../../auth/guards/jwt.guard';
import { GetProductsQueryDto } from '../dto/get-products-query.dto';
import { ResponseFindProductsDto } from '../dto/response-find-products.dto';
import { Product } from '../entities/product.entity';
import { ProductsController } from '../products.controller';
import { ProductsService } from '../products.service';

describe('ProductsController', () => {
  let productsController: ProductsController;

  const mock_JwtAuthGuard: CanActivate = {
    canActivate: jest.fn(() => true),
  };

  const mock_ProductsService = () => {
    return {
      findAll: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        ProductsService,
        { provide: ProductsService, useValue: mock_ProductsService },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue(mock_JwtAuthGuard)
      .compile();

    productsController = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(productsController).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      // Arrange
      const result: ResponseFindProductsDto = {
        total: 10,
        data: [
          new Product(
            123,
            'Product 1',
            "Product 1's category",
            '64684646846468468',
            'Product 1 description',
            'Product 1 image',
            12.25,
          ),
        ],
      };

      // Act
      jest
        .spyOn(productsController, 'findAll')
        .mockImplementation(async () => result);

      // Assert
      expect(result).toEqual([]);
    });
  });
});
