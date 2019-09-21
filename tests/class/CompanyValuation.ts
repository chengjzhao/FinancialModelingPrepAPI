import 'mocha';
import { expect } from 'chai';
import CompanyValuation from '../../src/class/CompanyValuation';
import { CompanyProfile } from '../../src/compiler/types';

describe('CompanyValuation', () => {
  const companyValuation = new CompanyValuation();

  it('should return an instance of HTTP on initialization', () => {
    expect(companyValuation).to.be.an('object');
    expect(companyValuation instanceof CompanyValuation).eq(true);
  });

  describe('profile()', () => {
    const symbol = 'AAPL'; // Apple Inc.
    let response: CompanyProfile;

    before(async () => {
      response = await companyValuation.profile(symbol);
    });

    it('should return a response as an object', () => {
      expect(response).to.be.an('object');
    });

    it(`should have symbol property equals to ${symbol}`, () => {
      expect(response.symbol).eq(symbol);
    });
  });
});
