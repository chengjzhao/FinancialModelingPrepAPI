import { AxiosInstance } from 'axios';
import { http, HttpComponent } from '../helpers/http';
import { MajorIndexes, Index, MostActiveStock, MostGainerStock, MostLoserStock, StockUpdate } from '../compiler/types';

/**
 * @constructor
 */
export class StockMarket implements HttpComponent {
  request: AxiosInstance;

  constructor() {
    this.request = http;
  }

  async majorIndexes(): Promise<Index[]> {
    const options = {
      url: '/majors-indexes',
    };
    const response = await this.request(options);
    const { data }: { data: MajorIndexes } = response;
    return data.majorIndexesList;
  }

  async index(ticker: string): Promise<Index> {
    const options = {
      url: `/majors-indexes/${ticker}`,
    };
    const response = await this.request(options);
    return response.data;
  }

  async actives(): Promise<StockUpdate[]> {
    const options = {
      url: '/stock/actives',
    };
    const response = await this.request(options);
    const { data }: { data: MostActiveStock } = response;
    return data.mostActiveStock;
  }

  async gainers(): Promise<StockUpdate[]> {
    const options = {
      url: '/stock/gainers',
    };
    const response = await this.request(options);
    const { data }: { data: MostGainerStock } = response;
    return data.mostGainerStock;
  }

  async losers(): Promise<StockUpdate[]> {
    const options = {
      url: '/stock/losers',
    };
    const response = await this.request(options);
    const { data }: { data: MostLoserStock } = response;
    return data.mostLoserStock;
  }

  async isTheStockMarketOpen(): Promise<boolean> {
    const options = {
      url: '/is-the-market-open',
    };
    const response = await this.request(options);
    return response.data.isTheStockMarketOpen;
  }
}
