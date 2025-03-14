import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { HttpCustomService } from 'src/providers/http-custom/http-custom.service';

@Injectable()
export class ProductsService {
  constructor(private readonly httpCustomService: HttpCustomService) {}
  create(createProductDto: CreateProductDto, file: Express.Multer.File) {
    return this.httpCustomService.createProduct(createProductDto, file);
  }

  findAll() {
    return this.httpCustomService.getAllProducts();
  }

  findOne(id: number) {
    return this.httpCustomService.getProductById(id);
  }

  remove(id: number) {
    return this.httpCustomService.deleteProductById(id);
  }
}
