export interface IDocumentAnadoluBank {
  invoices: {
    supplierVkn: string;
    supplierTitle: string;
    dueDate: string;
    invoiceNumber: string;
    paymentDate: string;
    dueDays: string;
    amount: string;
  }[];
  supplierTitle: string;
  supplierAccountNumber: string;
  date: string;
  totalAmount: string;
  financingAmount: string;
  financingCurrency: string;
  buyerCompanyTitle: string;
}

export interface IDocumentDefault {
  abfCode: string;
  bankName: string;
  date: string;
  rows: {
    order: number;
    buyerIdentifierNumber: string;
    buyerTitle: string;
    date: string;
    invoiceNumber: string;
    amount: string;
    journalNumber: string | null;
    currency: string;
    transferAmount: string;
    expiryDate: string;
  }[];
  abfSubTotal: {
    currency: string;
    totalAmount: number;
    totalTransferAmount: string;
    totalInvoiceCount: number;
    totalRefundAmount: string;
    totalRefundInvoiceCount: number;
  };
}

export interface IDocumentIsBankasi {
  abfCode: string;
  bankName: string;
  bankBranch: string;
  date: string;
  rows: {
    order: number;
    buyerIdentifierNumber: string;
    buyerTitle: string;
    date: string;
    invoiceNumber: string;
    amount: string;
    journalNumber: string | null;
    currency: string;
    transferAmount: string;
    expiryDate: string;
  }[];
  abfSubTotal: {
    currency: string;
    totalAmount: number;
    totalTransferAmount: string;
    totalInvoiceCount: number;
    totalRefundAmount: string;
    totalRefundInvoiceCount: number;
  };
  requestCode: string;
  invoiceDocument: {
    date: string;
    code: string;
    amount: string;
    transferAmount: string;
  }[];
  paymentInstruction: {
    housingFinanced: string;
    deductionAmount: string;
    netAmountToBePaid: string;
  };
  assignmentAgreement: {
    date: string;
    writtenAmount: string;
    number: string;
    acquirerCompany: string;
    acuqiringAmount: string;
    interlocutor: string;
    iban: string;
    createdDate: string;
  };
}
