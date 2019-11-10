import 'mocha';
import sinon from 'sinon';
import { expect } from 'chai';
import { Company } from '../../src/class/Company';
import { CompanyProfile, FinancialStatements } from '../../src/compiler/types';

describe('Company', () => {
  const symbol = 'AAPL'; // Apple Inc.
  let company: Company;

  it('should return an instance of Company on initialization', () => {
    expect(company).to.be.an('object');
    expect(company instanceof Company).eq(true);
  });

  beforeEach(() => {
    company = new Company();
  });

  describe('profile()', () => {
    let response: CompanyProfile;
      const spy = sinon.spy();

    before(async () => {
      response = await company.profile(symbol);
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
      response = await company.financialStatements(symbol);
    });

    it('should return a response as an object', () => {
      expect(response).to.be.an('object');
    });

    it(`should have symbol property equals to ${symbol}`, () => {
      expect(response.symbol).eq(symbol);
    });
  });
});
