import { applyDecorators } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export function DocumentTemplateTags() {
  return applyDecorators(ApiTags('Document Template'));
}
