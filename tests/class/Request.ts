import { expect } from 'chai';
import Http from '../../src/class/Http';
import 'mocha';

describe('Http', function() {
  const http = new Http();

  it('should return an instance of HTTP on initialization', function() {
    expect(http).to.be.an('object');
    expect(http instanceof Http).to.be.true;
  });

  describe('request()', function() {
    const url = 'http://jsonplaceholder.typicode.com/posts?userId=1';
    let response: any;

    before(async function() {
      response = await http.request({ url });
    });

    it('should return a response as an array', function() {
      expect(response).to.be.an('array');
    });
  });
});
