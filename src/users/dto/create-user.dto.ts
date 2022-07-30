import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmail,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNumber()
  id?: number;

  @IsString()
  @ApiProperty({
    description: 'User name',
    example: 'John Titor',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'User e-mail',
    example: 'john@gmail.com',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(12)
  @ApiProperty({
    description: 'User password',
    example: '12345abcd',
  })
  password: string;
}
