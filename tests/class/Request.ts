import 'mocha';
import { expect } from 'chai';
import Http from '../../src/class/Http';
import { CompanyProfile } from '../../src/compiler/types';

describe('Http', () => {
  const http = new Http();

  it('should return an instance of HTTP on initialization', () => {
    expect(http).to.be.an('object');
    expect(http instanceof Http).eq(true);
  });

  describe('request()', () => {
    const url = 'https://financialmodelingprep.com/api/v3/company/profile/AAPL';
    let response: CompanyProfile;

    before(async () => {
      response = await http.request({ url });
    });

    it('should return a response as an object', () => {
      expect(response).to.be.an('object');
    });
  });
});
