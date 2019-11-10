export interface HttpOptions {
  url: string;
  method?: string;
  qs?: {
    [s: string]: string | undefined;
  };
  headers?: {
    [s: string]: string;
  };
  body?: { [s: string]: string } | Array<{ [s: string]: string }>;
}

export interface CompanyProfile {
  symbol: string;
  profile: {
    price: number;
    beta: string;
    volAvg: string;
    mktCap: string;
    lastDiv: string;
    range: string;
    changes: number;
    changesPercentage: string;
    companyName: string;
    exchange: string;
    industry: string;
    website: string;
    description: string;
    ceo: string;
    sector: string;
    image: string;
  };
}

export interface IncomeStatement {
  date: string;
  Revenue: string;
  'Revenue Growth': string;
  'Cost of Revenue': string;
  'Gross Profit': string;
  'R&D Expenses': string;
  'SG&A Expense': string;
  'Operating Expenses': string;
  'Operating Income': string;
  'Interest Expense': string;
  'Earnings before Tax': string;
  'Income Tax Expense': string;
  'Net Income - Non-Controlling int': string;
  'Net Income - Discontinued ops': string;
  'Net Income': string;
  'Preferred Dividends': string;
  'Net Income Com': string;
  EPS: string;
  'EPS Diluted': string;
  'Weighted Average Shs Out': string;
  'Weighted Average Shs Out (Dil)': string;
  'Dividend per Share': string;
  'Gross Margin': string;
  'EBITDA Margin': string;
  'EBIT Margin': string;
  'Profit Margin': string;
  'Free Cash Flow margin': string;
  EBITDA: string;
  EBIT: string;
  'Consolidated Income': string;
  'Earnings Before Tax Margin': string;
  'Net Profit Margin': string;
}

export interface BalanceSheetStatement {
  date: string;
  'Cash and cash equivalents': string;
  'Short-term investments': string;
  'Cash and short-term investments': string;
  Receivables: string;
  Inventories: string;
  'Total current assets': string;
  'Property, Plant & Equipment Net': string;
  'Goodwill and Intangible Assets': string;
  'Long-term investments': string;
  'Tax assets': string;
  'Total non-current assets': string;
  'Total assets': string;
  Payables: string;
  'Short-term debt': string;
  'Total current liabilities': string;
  'Long-term debt': string;
  'Total debt': string;
  'Deferred revenue': string;
  'Tax Liabilities': string;
  'Deposit Liabilities': string;
  'Total non-current liabilities': string;
  'Total liabilities': string;
  'Other comprehensive income': string;
  'Retained earnings (deficit)': string;
  'Total shareholders equity': string;
  Investments: string;
  'Net Debt': string;
  'Other Assets': string;
  'Other Liabilities': string;
}

export interface CashFlowStatement {
  date: string;
  'Depreciation & Amortization': string;
  'Stock-based compensation': string;
  'Operating Cash Flow': string;
  'Capital Expenditure': string;
  'Acquisitions and disposals': string;
  'Investment purchases and sales': string;
  'Investing Cash flow': string;
  'Issuance (repayment) of debt': string;
  'Issuance (buybacks) of shares': string;
  'Dividend payments': string;
  'Financing Cash Flow': string;
  'Effect of forex changes on cash': string;
  'Net cash flow / Change in cash': string;
  'Free Cash Flow': string;
  'Net Cash/Marketcap': string;
}

export interface IncomeStatements {
  symbol: string;
  financials: IncomeStatement[];
}

export interface BalanceSheetStatements {
  symbol: string;
  financials: BalanceSheetStatement[];
}

export interface CashFlowStatements {
  symbol: string;
  financials: CashFlowStatement[];
}

export interface FinancialRatio {
  priceBookValueRatio: string;
  priceToBookRatio: string;
  priceToSalesRatio: string;
  priceEarningsRatio: string;
  receivablesTurnover: string;
  priceToFreeCashFlowsRatio: string;
  priceToOperatingCashFlowsRatio: string;
  priceCashFlowRatio: string;
  priceEarningsToGrowthRatio: string;
  priceSalesRatio: string;
  dividendYield: string;
  enterpriseValueMultiple: string;
  priceFairValue: string;
}

export interface FinancialRatios {
  symbol: string;
  ratios: FinancialRatio[];
}
