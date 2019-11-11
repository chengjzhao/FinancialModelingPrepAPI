import { AxiosInstance } from 'axios';
import { http, HttpComponent } from '../helpers/http';
import {
  CompanyProfile,
  CompanyRating,
  FinancialRatios,
  EnterpriseValues,
  CompanyKeyMetrics,
  FinancialStatementGrowths,
} from '../compiler/types';

/**
 * @constructor
 */
export class Company implements HttpComponent {
  request: AxiosInstance;
  symbol?: string;

  constructor(symbol?: string) {
    this.request = http;
    this.symbol = symbol;
  }

  /**
   * Company Profile
   * @description Companies profile (Price, Beta, Volume Average, Market Capitalization, Last Dividend, 52 week range, stock price change, stock price change in percentage, Company Name, Exchange, Description, Industry, Sector, CEO, Website and image)
   */
  async profile(symbol?: string): Promise<CompanyProfile> {
    const options = {
      url: `/company/profile/${this.symbol || symbol}`,
    };
    const response = await this.request(options);
    return response.data;
  }

  async rating(symbol?: string): Promise<CompanyRating> {
    const options = {
      url: `/company/rating/${this.symbol || symbol}`,
    };
    const response = await this.request(options);
    return response.data;
  }

  statements(): { income: Function; balanceSheet: Function; cashFlow: Function } {
    const createMethod: Function = (type: string) => {
      const method: Function = async ({
        symbol,
        period,
        datatype,
      }: {
        symbol?: string;
        period?: 'quarter';
        datatype?: 'csv';
      } = {}) => {
        const options = {
          url: `/financials/${type}/${this.symbol || symbol}`,
          params: {
            period,
            datatype,
          },
        };
        const response = await this.request(options);
        return response.data;
      };
      return method;
    };

    const income = createMethod('income-statement');
    const balanceSheet = createMethod('balance-sheet-statement');
    const cashFlow = createMethod('cash-flow-statement');

    return {
      income,
      balanceSheet,
      cashFlow,
    };
  }

  async financialRatios(symbol?: string): Promise<FinancialRatios> {
    const options = {
      url: `/financial-ratios/${this.symbol || symbol}`,
    };
    const response = await this.request(options);
    return response.data;
  }

  async enterpriseValue(symbol?: string, period?: 'quarter'): Promise<EnterpriseValues> {
    const options = {
      url: `/enterprise-value/${this.symbol || symbol}`,
      params: {
        period,
      },
    };
    const response = await this.request(options);
    return response.data;
  }

  async companyKeyMetric(symbol?: string, period?: 'quarter'): Promise<CompanyKeyMetrics> {
    const options = {
      url: `/company-key-metrics/${this.symbol || symbol}`,
      params: {
        period,
      },
    };
    const response = await this.request(options);
    return response.data;
  }

  async financialStatementGrowth(symbol?: string, period?: 'quarter'): Promise<FinancialStatementGrowths> {
    const options = {
      url: `/financial-statement-growth/${this.symbol || symbol}`,
      params: {
        period,
      },
    };
    const response = await this.request(options);
    return response.data;
  }
}
