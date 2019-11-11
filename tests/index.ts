import 'mocha';
import { expect } from 'chai';
import { Company, StockMarket } from '../src';

describe('Main', () => {
  it('should export class Company', () => {
    expect(Company).eq(Company);
  });
  it('should export class StockMarket', () => {
    expect(StockMarket).eq(StockMarket);
  });
});
