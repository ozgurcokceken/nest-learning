import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentTemplateModule } from './document-template/document-template.module';

@Module({
  imports: [DocumentTemplateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
