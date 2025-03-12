import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { HttpCustomModule } from 'src/providers/http-custom/http-custom.module';

@Module({
  imports: [HttpCustomModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
