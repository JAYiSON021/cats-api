import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@Inject('CatModelToken') private readonly catModel: Model<Cat>) { }

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return await createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }

  async findById(id: string): Promise<Cat> {
    return await this.catModel.findById(id).exec();
  }

  async removeById(id: string): Promise<Cat> {
    return await this.catModel.findByIdAndRemove(id).exec();
  }

  async updateCat(id: string, createCatDto: CreateCatDto): Promise<Cat> {
    return await this.catModel.findByIdAndUpdate(id, createCatDto, { new: true }).exec();
  }
}
