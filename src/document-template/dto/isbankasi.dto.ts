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

const InvoiceDocumentSchema = z.object({
  date: z.string(),
  code: z.string(),
  amount: z.string(),
  transferAmount: z.string(),
});

const PaymentInstructionSchema = z.object({
  housingFinanced: z.string(),
  deductionAmount: z.string(),
  netAmountToBePaid: z.string(),
});

const AssignmentAgreementSchema = z.object({
  date: z.string(),
  writtenAmount: z.string(),
  number: z.string(),
  acquirerCompany: z.string(),
  acuqiringAmount: z.string(),
  interlocutor: z.string(),
  iban: z.string(),
  createdDate: z.string(),
});

export const createIsbankasiDto = z.object({
  abfCode: z.string(),
  bankName: z.string(),
  bankBranch: z.string(),
  date: z.string(),
  rows: z.array(RowSchema),
  abfSubTotal: AbfSubTotalSchema,
  requestCode: z.string(),
  invoiceDocument: z.array(InvoiceDocumentSchema),
  paymentInstruction: PaymentInstructionSchema,
  assignmentAgreement: AssignmentAgreementSchema,
});

export type CreateIsbankasiDto = z.infer<typeof createIsbankasiDto>;
