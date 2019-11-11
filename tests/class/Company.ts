import 'mocha';
import { expect } from 'chai';
import { Company } from '../../src/class/Company';
import {
  CompanyProfile,
  IncomeStatements,
  BalanceSheetStatements,
  CashFlowStatements,
  CompanyRating,
  FinancialRatios,
  EnterpriseValues,
  CompanyKeyMetrics,
  FinancialStatementGrowths,
} from '../../src/compiler/types';

describe('Company', () => {
  const symbol = 'AAPL'; // Apple Inc.
  let company: Company;

  beforeEach(() => {
    company = new Company(symbol);
  });

  it('should return an instance of Company on initialization', () => {
    expect(company).to.be.an('object');
    expect(company instanceof Company).eq(true);
  });

  describe('profile()', () => {
    let response: CompanyProfile;

    before(async () => {
      response = await company.profile();
    });

    it('should return a response as an object', () => {
      expect(response).to.be.an('object');
    });

    it(`should have symbol property equals to ${symbol}`, () => {
      expect(response.symbol).eq(symbol);
    });
  });

  describe('rating()', () => {
    let response: CompanyRating;

    before(async () => {
      response = await company.rating();
    });

    it('should return a response as an object', () => {
      expect(response).to.be.an('object');
    });

    it(`should have symbol property equals to ${symbol}`, () => {
      expect(response.symbol).eq(symbol);
    });
  });

  describe('statements()', () => {
    let income: IncomeStatements;
    let balanceSheet: BalanceSheetStatements;
    let cashFlow: CashFlowStatements;

    before(async () => {
      income = await company.statements().income();
      balanceSheet = await company.statements().balanceSheet();
      cashFlow = await company.statements().cashFlow();
    });

    describe('income()', () => {
      it('should return a response as an object', () => {
        expect(income).to.be.an('object');
      });

      it(`should have symbol property equals to ${symbol}`, () => {
        expect(income.symbol).eq(symbol);
      });
    });

    describe('balanceSheet()', () => {
      it('should return a response as an object', () => {
        expect(balanceSheet).to.be.an('object');
      });

      it(`should have symbol property equals to ${symbol}`, () => {
        expect(balanceSheet.symbol).eq(symbol);
      });
    });

    describe('cashFlow()', () => {
      it('should return a response as an object', () => {
        expect(cashFlow).to.be.an('object');
      });

      it(`should have symbol property equals to ${symbol}`, () => {
        expect(cashFlow.symbol).eq(symbol);
      });
    });
  });

  describe('financialRatios()', () => {
    let response: FinancialRatios;

    before(async () => {
      response = await company.financialRatios();
    });

    it('should return a response as an object', () => {
      expect(response).to.be.an('object');
    });

    it(`should have symbol property equals to ${symbol}`, () => {
      expect(response.symbol).eq(symbol);
    });
  });

  describe('enterpriseValue()', () => {
    let response: EnterpriseValues;

    before(async () => {
      response = await company.enterpriseValue();
    });

    it('should return a response as an object', () => {
      expect(response).to.be.an('object');
    });

    it(`should have symbol property equals to ${symbol}`, () => {
      expect(response.symbol).eq(symbol);
    });
  });

  describe('companyKeyMetric()', () => {
    let response: CompanyKeyMetrics;

    before(async () => {
      response = await company.companyKeyMetric();
    });

    it('should return a response as an object', () => {
      expect(response).to.be.an('object');
    });

    it(`should have symbol property equals to ${symbol}`, () => {
      expect(response.symbol).eq(symbol);
    });
  });

  describe('financialStatementGrowth()', () => {
    let response: FinancialStatementGrowths;

    before(async () => {
      response = await company.financialStatementGrowth();
    });

    it('should return a response as an object', () => {
      expect(response).to.be.an('object');
    });

    it(`should have symbol property equals to ${symbol}`, () => {
      expect(response.symbol).eq(symbol);
    });
  });
});
