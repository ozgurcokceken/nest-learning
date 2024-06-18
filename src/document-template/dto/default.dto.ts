import { z } from 'zod';

const RowSchema = z.object({
  order: z.number(),
  buyerIdentifierNumber: z.string(),
  buyerTitle: z.string(),
  date: z.string(),
  invoiceNumber: z.string(),
  amount: z.string(),
  journalNumber: z.string().nullable(),
  currency: z.string(),
  transferAmount: z.string(),
  expiryDate: z.string(),
});

const AbfSubTotalSchema = z.object({
  currency: z.string(),
  totalAmount: z.number(),
  totalTransferAmount: z.string(),
  totalInvoiceCount: z.number(),
  totalRefundAmount: z.string(),
  totalRefundInvoiceCount: z.number(),
});

export const createDefaultDto = z
  .object({
    abfCode: z.string(),
    bankName: z.string(),
    date: z.string(),
    rows: z.array(RowSchema),
    abfSubTotal: AbfSubTotalSchema,
  })
  .required();

export type CreateDefaultDto = z.infer<typeof createDefaultDto>;
