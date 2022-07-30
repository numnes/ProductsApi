import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ required: true, unique: true, index: true })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  category: string;

  @Prop({ required: false })
  barCode: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: false })
  image: string;

  @Prop({ required: false })
  price: number;

  constructor(
    id?: number,
    name?: string,
    category?: string,
    barCode?: string,
    description?: string,
    image?: string,
    price?: number,
  ) {
    super();
    this.id = id;
    this.name = name;
    this.category = category;
    this.barCode = barCode;
    this.description = description;
    this.image = image;
    this.price = price;
  }
}

export const ProductSchema = SchemaFactory.createForClass(Product);
