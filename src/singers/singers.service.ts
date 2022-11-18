import { Injectable } from '@nestjs/common';
import { CreateSingerDto } from './dto/create-singer.dto';
import { UpdateSingerDto } from './dto/update-singer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Singer } from './entities/singer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SingersService {
  constructor(
    @InjectRepository(Singer) private singerRepository: Repository<Singer>,
  ) {}
  create(createSingerDto: CreateSingerDto) {
    return this.singerRepository.save(createSingerDto);
  }

  findAll() {
    return this.singerRepository.find();
  }

  findOne(id: number) {
    //return `This action returns a #${id} singer`;
    return this.singerRepository.findOneBy({ id });
  }

  update(id: number, updateSingerDto: UpdateSingerDto) {
    //return `This action updates a #${id} singer`;
    return this.singerRepository.update({ id }, { ...updateSingerDto });
  }

  async remove(id: number) {
    //return `This action removes a #${id} singer`;
    await this.singerRepository.delete(id);
  }
}
