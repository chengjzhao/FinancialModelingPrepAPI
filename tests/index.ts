import { add } from '../src/';
import { expect } from 'chai';

describe('add()', () => {
  it('should return 6 when arguments are 2 and 4', () => {
    const result = add(2, 4);
    expect(result).to.equal(6);
  });
});