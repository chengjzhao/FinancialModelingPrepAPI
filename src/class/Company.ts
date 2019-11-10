import { http } from '../helpers/http';
import { CompanyProfile, FinancialStatements } from '../compiler/types';

/**
 * @constructor
 */
export class Company {
  /**
   * Company Profile
   * @description Companies profile (Price, Beta, Volume Average, Market Capitalization, Last Dividend, 52 week range, stock price change, stock price change in percentage, Company Name, Exchange, Description, Industry, Sector, CEO, Website and image)
   */
  async profile(symbol: string): Promise<CompanyProfile> {
    const url = `/company/profile/${symbol}`;
    const response = await http.request({ url });
    return response.data;
  }

  /**
   * Company Financial Statements
   */
  async financialStatements(symbol: string, period?: 'quarter', datatype?: 'csv'): Promise<FinancialStatements> {
    const url = `/financials/income-statement/${symbol}`;
    const options = {
      url,
      params: {
        period,
        datatype,
      },
    };
    const response = await http.request(options);
    return response.data;
  }
}
