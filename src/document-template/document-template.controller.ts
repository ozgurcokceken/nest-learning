import { Body, Controller, Post, UsePipes } from '@nestjs/common';

import { ZodValidationPipe } from 'src/zod.pipe';
import {
  AnadolubankDocumentSwagger,
  DefaultDocumentSwagger,
  DocumentTemplateTags,
  IsbankasiDocumentSwagger,
} from './swagger';
import {
  CreateAnadolubankDto,
  CreateDefaultDto,
  CreateIsbankasiDto,
  createAnadolubankDto,
  createDefaultDto,
  createIsbankasiDto,
} from './dto';

@DocumentTemplateTags()
@Controller('documents/abf')
export class DocumentTemplateController {
  @Post('default')
  @DefaultDocumentSwagger()
  @UsePipes(new ZodValidationPipe(createDefaultDto))
  async createDefault(@Body() document: CreateDefaultDto) {
    return document;
  }

  @Post('anadolubank')
  @AnadolubankDocumentSwagger()
  @UsePipes(new ZodValidationPipe(createAnadolubankDto))
  async createAnadolubank(@Body() document: CreateAnadolubankDto) {
    return document;
  }

  @Post('isbankasi')
  @IsbankasiDocumentSwagger()
  @UsePipes(new ZodValidationPipe(createIsbankasiDto))
  async createIsbankasi(@Body() document: CreateIsbankasiDto) {
    return document;
  }
}
