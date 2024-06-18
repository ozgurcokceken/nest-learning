import { z } from 'zod';

const InvoiceSchema = z.object({
  supplierVkn: z.string(),
  supplierTitle: z.string(),
  dueDate: z.string(),
  invoiceNumber: z.string(),
  paymentDate: z.string(),
  dueDays: z.string(),
  amount: z.string(),
});

export const createAnadolubankDto = z
  .object({
    invoices: z.array(InvoiceSchema),
    supplierTitle: z.string(),
    supplierAccountNumber: z.string(),
    date: z.string(),
    totalAmount: z.string(),
    financingAmount: z.string(),
    financingCurrency: z.string(),
    buyerCompanyTitle: z.string(),
  })
  .required();

export type CreateAnadolubankDto = z.infer<typeof createAnadolubankDto>;
