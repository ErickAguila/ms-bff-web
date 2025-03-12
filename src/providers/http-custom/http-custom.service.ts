import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
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
}
