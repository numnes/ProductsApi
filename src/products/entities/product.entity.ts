import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ required: true, unique: true, index: true })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  barCode: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: false })
  image: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
