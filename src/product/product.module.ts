import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.model';
import { ProductsService } from './product.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductsService],
})
export class ProductModule {}
