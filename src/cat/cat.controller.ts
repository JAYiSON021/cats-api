import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cat.service';
import { Cat } from './interfaces/cat.interface';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findById(id);
  }

  @Delete('/:id')
  async removeById(@Param('id') id: string): Promise<Cat> {
    return this.catsService.removeById(id);
  }

  @Put('/:id')
  async updateCat(@Param('id') id: string, @Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.updateCat(id, createCatDto);
  }

}
