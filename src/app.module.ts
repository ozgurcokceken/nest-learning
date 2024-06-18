import { Module } from '@nestjs/common';
import { DocumentTemplateModule } from './document-template/document-template.module';

@Module({
  imports: [DocumentTemplateModule],
})
export class AppModule {}
