import Http from './Http';
import environment from '../../environments/environment';
import { CompanyProfile } from '../compiler/types';

const { apiUrl } = environment;

/**
 * @constructor
 * @extends Http
 */
export default class CompanyValuation extends Http {
  /**
   * Company Profile
   * @description Companies profile (Price, Beta, Volume Average, Market Capitalization, Last Dividend, 52 week range, stock price change, stock price change in percentage, Company Name, Exchange, Description, Industry, Sector, CEO, Website and image)
   */
  profile(symbol: string): Promise<CompanyProfile> {
    const url = `${apiUrl}/company/profile/${symbol}`;
    return this.request({ url });
  }
}
