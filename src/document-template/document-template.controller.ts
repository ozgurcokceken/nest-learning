import { Body, Controller, Post } from '@nestjs/common';
import {
  IDocumentAnadoluBank,
  IDocumentDefault,
  IDocumentIsBankasi,
} from './types/abf';

@Controller('document-template/abf')
export class DocumentTemplateController {
  @Post('default')
  createDefault(@Body() document: IDocumentDefault) {
    return document;
  }
  @Post('anadolubank')
  createAnadolubank(@Body() document: IDocumentAnadoluBank) {
    return document;
  }

  @Post('isbankasi')
  createIsbankasi(@Body() document: IDocumentIsBankasi) {
    return document;
  }
}
