export interface HttpOptions {
  url: string;
  method?: string;
  qs?: {
    [s: string]: string;
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
