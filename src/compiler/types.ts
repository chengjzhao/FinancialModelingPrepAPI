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

export interface FinancialStatement {
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

export interface FinancialStatements {
  symbol: string;
  financials: FinancialStatement[];
}
