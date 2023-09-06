import { Controller, Get, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, productDocument } from './product.model';
import { Model } from 'mongoose';
import { ClientProxy } from '@nestjs/microservices/client';
import { productDto } from './dto/product.dto';
@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly ProductModel: Model<productDocument>, // @Inject('Product_service') private readonly client: ClientProxy,
  ) {}
  async AddProduct(productDetails: productDto) {
    // this.client.emit('hello', 'hello from rabbitMQ');
    console.log(productDetails);
    await this.ProductModel.create(productDetails);
    return 'product added';
  }
}
