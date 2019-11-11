import 'mocha';
import { expect } from 'chai';
import { StockMarket } from '../../src/class/StockMarket';
import { Index, StockUpdate } from '../../src/compiler/types';

describe('StockMarket', () => {
  let stockMarket: StockMarket;

  beforeEach(() => {
    stockMarket = new StockMarket();
  });

  it('should return an instance of StockMarket on initialization', () => {
    expect(stockMarket).to.be.an('object');
    expect(stockMarket instanceof StockMarket).eq(true);
  });

  describe('majorIndexes()', () => {
    let response: Index[];

    before(async () => {
      response = await stockMarket.majorIndexes();
    });

    it('should return a response as an object', () => {
      expect(response).to.be.an('array').that.is.not.empty;
    });
  });

  describe('index()', () => {
    let response: Index;

    before(async () => {
      response = await stockMarket.index('.DJI');
    });

    it('should return a response as an object', () => {
      expect(response).to.be.an('object');
    });
  });

  describe('actives()', () => {
    let response: StockUpdate[];

    before(async () => {
      response = await stockMarket.actives();
    });

    it('should return a response as an object', () => {
      expect(response).to.be.an('array').that.is.not.empty;
    });
  });

  describe('gainers()', () => {
    let response: StockUpdate[];

    before(async () => {
      response = await stockMarket.gainers();
    });

    it('should return a response as an object', () => {
      expect(response).to.be.an('array').that.is.not.empty;
    });
  });

  describe('losers()', () => {
    let response: StockUpdate[];

    before(async () => {
      response = await stockMarket.losers();
    });

    it('should return a response as an object', () => {
      expect(response).to.be.an('array').that.is.not.empty;
    });
  });

  describe('isTheStockMarketOpen()', () => {
    let response: boolean;

    before(async () => {
      response = await stockMarket.isTheStockMarketOpen();
    });

    it('should return a response as a boolean', () => {
      expect([true, false]).to.include(response);
    });
  });
});
