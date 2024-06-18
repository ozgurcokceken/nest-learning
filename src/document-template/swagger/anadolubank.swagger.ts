import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

export function AnadolubankDocumentSwagger() {
  return applyDecorators(
    ApiOperation({ summary: 'Create Anadolubank document' }),
    ApiResponse({
      status: 201,
      description: 'Anadolubank document has been successfully generated',
      content: {
        'application/pdf': {
          schema: {
            type: 'file',
            format: 'binary',
          },
        },
      },
    }),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          invoices: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                supplierVkn: { type: 'string', example: '1234567890' },
                supplierTitle: { type: 'string', example: 'John Doe' },
                dueDate: { type: 'string', example: '2021-09-01' },
                invoiceNumber: { type: 'string', example: 'INV-123' },
                paymentDate: { type: 'string', example: '2021-09-01' },
                dueDays: { type: 'string', example: '30' },
                amount: { type: 'string', example: '1000' },
              },
            },
          },
          supplierTitle: { type: 'string', example: 'John Doe' },
          supplierAccountNumber: { type: 'string', example: '1234567890' },
          date: { type: 'string', example: '2021-09-01' },
          totalAmount: { type: 'string', example: '1000' },
          financingAmount: { type: 'string', example: '1000' },
          financingCurrency: { type: 'string', example: 'TRY' },
          buyerCompanyTitle: { type: 'string', example: 'John Doe' },
        },
      },
    }),
  );
}
