import { AxiosInstance } from 'axios';
import { http, HttpComponent } from '../helpers/http';
import { CompanyProfile, FinancialRatios } from '../compiler/types';

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

    return {
      income: createMethod('income-statement'),
      balanceSheet: createMethod('balance-sheet-statement'),
      cashFlow: createMethod('cash-flow-statement'),
    };
  }

  async financialRatios(symbol?: string): Promise<FinancialRatios> {
    const options = {
      url: `/financial-ratios/${this.symbol || symbol}`,
    };
    const response = await this.request(options);
    return response.data;
  }
}
