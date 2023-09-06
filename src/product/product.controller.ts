import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from './product.service';
import { productDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly ProductsService: ProductsService) {}
  @Post()
  async AddProduct(@Body() productDetails: productDto) {
    return await this.ProductsService.AddProduct(productDetails);
  }
}
