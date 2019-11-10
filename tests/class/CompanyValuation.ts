import 'mocha';
import { expect } from 'chai';
import { CompanyValuation } from '../../src/class/CompanyValuation';
import { CompanyProfile, FinancialStatements } from '../../src/compiler/types';

describe('CompanyValuation', () => {
  const companyValuation = new CompanyValuation();
  const symbol = 'AAPL'; // Apple Inc.

  it('should return an instance of HTTP on initialization', () => {
    expect(companyValuation).to.be.an('object');
    expect(companyValuation instanceof CompanyValuation).eq(true);
  });

  describe('profile()', () => {
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

  describe('financialStatements()', () => {
    let response: FinancialStatements;

    before(async () => {
      response = await companyValuation.financialStatements(symbol);
    });

    it('should return a response as an object', () => {
      expect(response).to.be.an('object');
    });

    it(`should have symbol property equals to ${symbol}`, () => {
      expect(response.symbol).eq(symbol);
    });
  });
});
