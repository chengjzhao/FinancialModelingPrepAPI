import 'mocha';
import { expect } from 'chai';
import { Company } from '../src';

describe('Main', () => {
  it('should export class Company', () => {
    expect(Company).eq(Company);
  });
});
