import 'mocha';
import { expect } from 'chai';
import { http } from '../../src/helpers/http';

describe('Http', () => {
  it('should export http helper', () => {
    expect(http).to.be.an.instanceOf(Function);
  });
});
