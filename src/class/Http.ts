import { EventEmitter } from 'events';
import { request } from 'https';
import * as url from 'url';
import * as querystring from 'querystring';
import { HttpOptions } from '../compiler/types';

declare interface Http {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  emit(event: string, ...args: any[]): boolean;
  on(event: string, listener: (...args: any[]) => void): this;
  once(event: string, listener: (...args: any[]) => void): this;
  addListener(event: string, listener: (...args: any[]) => void): this;
  removeListener(event: string, listener: (...args: any[]) => void): this;
  removeAllListeners(event?: string): this;
  listenerCount(type: string): number;
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

/**
 * @constructor
 * @extends EventEmitter
 */
class Http extends EventEmitter {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request(options: HttpOptions): Promise<any> {
    return new Promise((resolve, reject): void => {
      const qs = options.qs ? querystring.stringify(options.qs) : null;
      const parsedUrl = url.parse(options.url);
      const httpOptions = {
        headers: options.headers || {},
        method: options.method || 'GET',
        hostname: parsedUrl.hostname,
        path: qs ? `${parsedUrl.path}?${qs}` : parsedUrl.path,
      };

      this.emit('http:request', httpOptions);

      const req = request(httpOptions, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          try {
            const parsed = JSON.parse(data);
            this.emit('http:response', parsed);
            resolve(parsed);
          } catch (err) {
            this.emit('http:response', data);
            resolve(data);
          }
        });
      });

      req.on('error', (error) => {
        this.emit('http:error', error);
        reject(error);
      });
      req.end();
    });
  }
}

export default Http;
