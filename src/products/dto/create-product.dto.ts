import { IsString, IsNotEmpty, IsNumber, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsNumber()
  @ApiProperty({
    description: 'Product external identifyer',
  })
  id?: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Product name',
    example: 'Funko Pop Spider-Man',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Product bar code',
    example: '31531313153135135153531353',
  })
  barCode?: string;

  @IsString()
  @ApiProperty({
    description: 'Product description',
    example:
      'De Spider-Man No Way Home, Homem-Aranha com sua nova roupa, como um Pop! da Funko. Tamanho aprox. 10cm',
  })
  description?: string;

  @IsString()
  @IsUrl()
  @ApiProperty({
    description: 'Product description',
    example:
      'https://res.cloudinary.com/nunes/image/upload/v1632252466/example.png',
  })
  image?: string;
}
