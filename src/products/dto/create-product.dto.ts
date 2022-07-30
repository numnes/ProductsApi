import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsUrl,
  IsOptional,
  IsEmpty,
  IsCurrency,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsOptional()
  @IsEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'Product external identifyer',
  })
  id?: number | null;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Product name',
    example: 'Funko Pop Spider-Man',
  })
  name: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Product bar code',
    example: '31531313153135135153531353',
  })
  barCode?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Product description',
    example:
      'De Spider-Man No Way Home, Homem-Aranha com sua nova roupa, como um Pop! da Funko. Tamanho aprox. 10cm',
  })
  description?: string;

  @IsOptional()
  @IsString()
  @IsUrl()
  @ApiProperty({
    description: 'Product description',
    example:
      'https://res.cloudinary.com/nunes/image/upload/v1632252466/example.png',
  })
  image?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Product category',
    example: 'Toy',
  })
  category: string;

  @IsOptional()
  @IsCurrency()
  @ApiProperty({
    description: 'Product price',
    example: 12.25,
  })
  price: number;
}
