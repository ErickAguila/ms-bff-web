import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { CreateProductDto } from 'src/modules/products/dto/create-product.dto';
import * as FormData from 'form-data';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { configVar } from 'src/shared/config/env.config';

@Injectable()
export class HttpCustomService {
  constructor(private readonly httpService: HttpService) {}

  async createUser(createUserDto: CreateUserDto) {
    const response = await firstValueFrom(
      this.httpService.post(`${configVar.URL_MS_BS_USER}/users`, createUserDto),
    );
    return response.data;
  }

  async getAllUsers() {
    const response = await firstValueFrom(
      this.httpService.get(`${configVar.URL_MS_BS_USER}/users`),
    );
    return response.data;
  }

  async getUserById(id: number) {
    const response = await firstValueFrom(
      this.httpService.get(`${configVar.URL_MS_BS_USER}/users/${id}`),
    );
    return response.data;
  }

  async deleteUserById(id: number) {
    const response = await firstValueFrom(
      this.httpService.delete(`${configVar.URL_MS_BS_USER}/users/${id}`),
    );
    return response.data;
  }

  async createProduct(createProductDto: CreateProductDto, file: Express.Multer.File) {
    const formData = new FormData();
    formData.append('file', file.buffer, file.originalname);
    formData.append('userId', createProductDto.userId);
    formData.append('name', createProductDto.name);
    formData.append('description', createProductDto.description);
    formData.append('price', createProductDto.price);
    formData.append('stock', createProductDto.stock);
    formData.append('category', createProductDto.category);

    const response = await firstValueFrom(
      this.httpService.post(`${configVar.URL_MS_BS_SALE}/products`, formData, {
        headers: {
          ...formData.getHeaders(),
        },
      }),
    );
    return response.data;
  }

  async getAllProducts() {
    const response = await firstValueFrom(
      this.httpService.get(`${configVar.URL_MS_BS_SALE}/products`),
    );
    return response.data;
  }

  async getProductById(id: number) {
    const response = await firstValueFrom(
      this.httpService.get(`${configVar.URL_MS_BS_SALE}/products/${id}`),
    );
    return response.data;
  }

  async deleteProductById(id: number) {
    const response = await firstValueFrom(
      this.httpService.delete(`${configVar.URL_MS_BS_SALE}/products/${id}`),
    );
    return response.data;
  }
}
