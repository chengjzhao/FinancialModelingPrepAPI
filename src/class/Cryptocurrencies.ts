import { AxiosInstance } from 'axios';
import { http, HttpComponent } from '../helpers/http';
import {
 Cryptocurrencies,
 Cryptocurrency,
} from '../compiler/types';

/**
 * @constructor
 */
export class Crypto implements HttpComponent {
  request: AxiosInstance;
  name?: string;

  constructor(name?: string) {
    this.request = http;
    this.name = name;
  }

  async getAll(): Promise<Cryptocurrencies> {
    const options = {
      url: `/cryptocurrencies`,
    };
    const response = await this.request(options);
    return response.data;
  }

  async get(name?: string): Promise<Cryptocurrency> {
    const options = {
      url: `/cryptocurrencies/${this.name || name}`,
    };
    const response = await this.request(options);
    return response.data;
  }


}
