import 'mocha';
import { expect } from 'chai';
import { FinancialModelingPrep } from '../src';
import { CompanyProfile } from '../src/compiler/types';

describe('FinancialModelingPrep', () => {
  const financialModelingPrep = new FinancialModelingPrep();

  it('should return an instance of FinancialModelingPrep on initialization', () => {
    expect(financialModelingPrep).to.be.an('object');
    expect(financialModelingPrep instanceof FinancialModelingPrep).eq(true);
  });

  describe('CompanyValuation', () => {
    describe('profile()', () => {
      const symbol = 'AAPL'; // Apple Inc.
      let response: CompanyProfile;

      before(async () => {
        response = await financialModelingPrep.profile(symbol);
      });

      it('should return a response as an object', () => {
        expect(response).to.be.an('object');
      });

      it(`should have symbol property equals to ${symbol}`, () => {
        expect(response.symbol).eq(symbol);
      });
    });
  });
});
