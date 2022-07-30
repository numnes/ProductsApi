import {
  Injectable,
  InternalServerErrorException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { randomInt } from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly configService: ConfigService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    if (await this.findByEmail(createUserDto.email)) {
      throw new UnprocessableEntityException(
        'User with this email already exists',
      );
    }
    try {
      createUserDto.password = bcrypt.hashSync(
        createUserDto.password,
        this.configService.get('bcrypt.saltRounds'),
      );

      if (!createUserDto.id) {
        let id = randomInt(1, 999999999999);
        while (await this.findOne(id)) {
          id = randomInt(1, 999999999999);
        }
        createUserDto.id = id;
      }

      const user = await this.userModel.create(createUserDto);
      const { password, _id, __v, ...userData } = user.toObject();
      return userData;
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: number) {
    return this.userModel.findOne({ id });
  }

  findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.findOneAndUpdate({ id }, updateUserDto);
  }

  remove(id: number) {
    return this.userModel.findOneAndRemove({ id });
  }
}
