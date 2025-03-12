import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { HttpCustomService } from 'src/providers/http-custom/http-custom.service';

@Injectable()
export class UsersService {
  constructor(private readonly httpCustomService: HttpCustomService) {}
  create(createUserDto: CreateUserDto) {
    return this.httpCustomService.createUser(createUserDto);
  }

  findAll() {
    return this.httpCustomService.getAllUsers();
  }

  findOne(id: number) {
    return this.httpCustomService.getUserById(id);
  }

  remove(id: number) {
    return this.httpCustomService.deleteUserById(id);
  }
}
