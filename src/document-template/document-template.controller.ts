import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from 'src/zod.pipe';
import { CreateDefaultDto, createDefaultDto } from './dto/default.dto';
import { CreateIsbankasiDto, createIsbankasiDto } from './dto/isbankasi.dto';
import {
  CreateAnadolubankDto,
  createAnadolubankDto,
} from './dto/anadolubank.dto';

@Controller('document-template/abf')
export class DocumentTemplateController {
  @Post('default')
  @UsePipes(new ZodValidationPipe(createDefaultDto))
  async createDefault(@Body() document: CreateDefaultDto) {
    return document;
  }
  @Post('anadolubank')
  @UsePipes(new ZodValidationPipe(createAnadolubankDto))
  async createAnadolubank(@Body() document: CreateAnadolubankDto) {
    return document;
  }

  @Post('isbankasi')
  @UsePipes(new ZodValidationPipe(createIsbankasiDto))
  async createIsbankasi(@Body() document: CreateIsbankasiDto) {
    return document;
  }
}
