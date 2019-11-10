import 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import { Http } from '../../src/class/Http';
import { CompanyProfile } from '../../src/compiler/types';

describe('Http', () => {
  const http = new Http();
  const requestSpy = sinon.spy();
  const responseSpy = sinon.spy();

  http.once('http:request', requestSpy);
  http.once('http:response', responseSpy);

  it('should return an instance of HTTP on initialization', () => {
    expect(http).to.be.an('object');
    expect(http instanceof Http).eq(true);
  });

  describe('request()', () => {
    const url = 'https://financialmodelingprep.com/api/v3/company/profile/AAPL';
    let response: CompanyProfile;

    before(async () => {
      response = await http.request({ url });
    });

    it('should return a response as an object', () => {
      expect(response).to.be.an('object');
    });

    describe('Events: http:request', () => {
      it('should have called once', () => {
        expect(requestSpy.callCount).eq(1);
      });
    });

    describe('Events: http:response', () => {
      it('should have called once with response object', () => {
        expect(responseSpy.calledOnceWith(response)).eq(true);
      });
    });
  });
});
