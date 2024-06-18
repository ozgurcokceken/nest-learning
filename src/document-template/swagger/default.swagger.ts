import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

export function DefaultDocumentSwagger() {
  return applyDecorators(
    ApiOperation({ summary: 'Create Default document' }),
    ApiResponse({
      status: 200,
      description: 'The document has been successfully generated.',
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
          abfCode: { type: 'string', example: 'ABF-4444' },
          bankName: { type: 'string', example: 'Garanti Bankasi' },
          date: { type: 'string', example: '2021-09-01' },
          rows: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                order: { type: 'number', example: 1 },
                buyerIdentifierNumber: {
                  type: 'string',
                  example: '1234567890',
                },
                buyerTitle: { type: 'string', example: 'John Doe' },
                date: { type: 'string', example: '2021-09-01' },
                invoiceNumber: { type: 'string', example: 'INV-123' },
                amount: { type: 'string', example: '1000' },
                journalNumber: { type: 'string', example: 'JN-123' },
                currency: { type: 'string', example: 'TRY' },
                transferAmount: { type: 'string', example: '1000' },
                expiryDate: { type: 'string', example: '2021-09-01' },
              },
            },
          },
          abfSubTotal: {
            type: 'object',
            properties: {
              currency: { type: 'string', example: 'TRY' },
              totalAmount: { type: 'number', example: 1000 },
              totalTransferAmount: { type: 'string', example: '1000' },
              totalInvoiceCount: { type: 'number', example: 1 },
              totalRefundAmount: { type: 'string', example: '0' },
              totalRefundInvoiceCount: { type: 'number', example: 0 },
            },
          },
        },
      },
    }),
  );
}
