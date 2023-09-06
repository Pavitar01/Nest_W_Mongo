import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

export type productDocument = Product & Document;
@Schema()
export class Product {
  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  title: string;
  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  image: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
