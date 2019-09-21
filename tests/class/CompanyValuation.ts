import { expect } from 'chai';
import CompanyValuation from '../../src/class/CompanyValuation';
import { CompanyProfile } from '../../src/compiler/types';
import 'mocha';

describe('CompanyValuation', function() {
  const companyValuation = new CompanyValuation();

  it('should return an instance of HTTP on initialization', function() {
    expect(companyValuation).to.be.an('object');
    expect(companyValuation instanceof CompanyValuation).to.be.true;
  });

  describe('profile()', function() {
    const symbol = 'AAPL'; // Apple Inc.
    let response: CompanyProfile;

    before(async function() {
      response = await companyValuation.profile(symbol);
    });

    it('should return a response as an object', function() {
      expect(response).to.be.an('object');
    });

    it(`should have symbol property equals to ${symbol}`, function() {
      expect(response.symbol).eq(symbol);
    });
  });
});
