import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';

const dotEnvConfig = ConfigModule.forRoot({
  isGlobal: true,
  load: [configuration],
});

const mainMongoConfig = MongooseModule.forRootAsync({
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get('database'),
  }),
  inject: [ConfigService],
});

@Module({
  imports: [ProductsModule, UsersModule, dotEnvConfig, mainMongoConfig],
})
export class AppModule {}
