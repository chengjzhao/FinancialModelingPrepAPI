import Http from './Http';
import environment from '../../environments/environment';
import { CompanyProfile } from '../compiler/types';

const { apiUrl } = environment;

export default class CompanyValuation extends Http {
  profile(symbol: string): Promise<CompanyProfile> {
    const url = `${apiUrl}/company/profile/${symbol}`;
    return this.request({ url });
  }
}
