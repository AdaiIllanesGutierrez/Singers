import { Module } from '@nestjs/common';
import { SingersService } from './singers.service';
import { SingersController } from './singers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Singer } from './entities/singer.entity';

@Module({
  controllers: [SingersController],
  providers: [SingersService],
  imports: [TypeOrmModule.forFeature([Singer])],
})
export class SingersModule {}
