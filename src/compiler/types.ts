type StockSymbol = string;

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
  symbol: StockSymbol;
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

export interface CompanyRating {
  symbol: StockSymbol;
  rating: {
    score: number;
    rating: string;
    recommendation: string;
  };
  ratingDetails: {
    'P/B': {
      score: number;
      recommendation: string;
    };
    ROA: {
      score: number;
      recommendation: string;
    };
    DCF: {
      score: number;
      recommendation: string;
    };
    'P/E': {
      score: number;
      recommendation: string;
    };
    ROE: {
      score: number;
      recommendation: string;
    };
    'D/E': {
      score: number;
      recommendation: string;
    };
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
  symbol: StockSymbol;
  financials: IncomeStatement[];
}

export interface BalanceSheetStatements {
  symbol: StockSymbol;
  financials: BalanceSheetStatement[];
}

export interface CashFlowStatements {
  symbol: StockSymbol;
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
  symbol: StockSymbol;
  ratios: FinancialRatio[];
}

export interface EnterpriseValue {
  date: string;
  'Stock Price': string;
  'Number of Shares': string;
  'Market Capitalization': number;
  '- Cash & Cash Equivalents': number;
  '+ Total Debt': number;
  'Enterprise Value': number;
}

export interface EnterpriseValues {
  symbol: StockSymbol;
  enterpriseValues: EnterpriseValue[];
}

export interface CompanyKeyMetric {
  date: string;
  'Revenue per Share': string;
  'Net Income per Share': string;
  'Operating Cash Flow per Share': string;
  'Free Cash Flow per Share': string;
  'Cash per Share': string;
  'Book Value per Share': string;
  'Tangible Book Value per Share': string;
  'Shareholders Equity per Share': string;
  'Interest Debt per Share': string;
  'Market Cap': string;
  'Enterprise Value': string;
  'PE ratio': string;
  'Price to Sales Ratio': string;
  'POCF ratio': string;
  'PFCF ratio': string;
  'PB ratio': string;
  'PTB ratio': string;
  'EV to Sales': string;
  'Enterprise Value over EBITDA': string;
  'EV to Operating cash flow': string;
  'EV to Free cash flow': string;
  'Earnings Yield': string;
  'Free Cash Flow Yield': string;
  'Debt to Equity': string;
  'Debt to Assets': string;
  'Net Debt to EBITDA': string;
  'Current ratio': string;
  'Interest Coverage': string;
  'Income Quality': string;
  'Dividend Yield': string;
  'Payout Ratio': string;
  'SG&A to Revenue': string;
  'R&D to Revenue': string;
  'Intangibles to Total Assets': string;
  'Capex to Operating Cash Flow': string;
  'Capex to Revenue': string;
  'Capex to Depreciation': string;
  'Stock-based compensation to Revenue': string;
  'Graham Number': string;
  ROIC: string;
  'Return on Tangible Assets': string;
  'Graham Net-Net': string;
  'Working Capital': string;
  'Tangible Asset Value': string;
  'Net Current Asset Value': string;
  'Invested Capital': string;
  'Average Receivables': string;
  'Average Payables': string;
  'Average Inventory': string;
  'Days Sales Outstanding': string;
  'Days Payables Outstanding': string;
  'Days of Inventory on Hand': string;
  'Receivables Turnover': string;
  'Payables Turnover': string;
  'Inventory Turnover': string;
  ROE: string;
  'Capex per Share': string;
}

export interface CompanyKeyMetrics {
  symbol: StockSymbol;
  enterpriseValues: CompanyKeyMetric[];
}

export interface FinancialStatementGrowth {
  date: string;
  'Gross Profit Growth': string;
  'EBIT Growth': string;
  'Operating Income Growth': string;
  'Net Income Growth': string;
  'EPS Growth': string;
  'EPS Diluted Growth': string;
  'Weighted Average Shares Growth': string;
  'Weighted Average Shares Diluted Growth': string;
  'Dividends per Share Growth': string;
  'Operating Cash Flow growth': string;
  'Free Cash Flow growth': string;
  '10Y Revenue Growth (per Share)': string;
  '5Y Revenue Growth (per Share)': string;
  '3Y Revenue Growth (per Share)': string;
  '10Y Operating CF Growth (per Share)': string;
  '5Y Operating CF Growth (per Share)': string;
  '3Y Operating CF Growth (per Share)': string;
  '10Y Net Income Growth (per Share)': string;
  '5Y Net Income Growth (per Share)': string;
  '3Y Net Income Growth (per Share)': string;
  '10Y Shareholders Equity Growth (per Share)': string;
  '5Y Shareholders Equity Growth (per Share)': string;
  '3Y Shareholders Equity Growth (per Share)': string;
  '10Y Dividend per Share Growth (per Share)': string;
  '5Y Dividend per Share Growth (per Share)': string;
  '3Y Dividend per Share Growth (per Share)': string;
  'Receivables growth': string;
  'Inventory Growth': string;
  'Asset Growth': string;
  'Book Value per Share Growth': string;
  'Debt Growth': string;
  'R&D Expense Growth': string;
  'SG&A Expenses Growth': string;
}

export interface FinancialStatementGrowths {
  symbol: StockSymbol;
  growth: FinancialStatementGrowth[];
}
