import { EventEmitter } from 'events';
import { request } from 'https';
import * as url from 'url';
import * as querystring from 'querystring';
import { HttpOptions } from '../compiler/types';

/**
 * @constructor
 * @extends EventEmitter
 */
export default class Http extends EventEmitter {
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
            this.emit('http:request', parsed);
            resolve(parsed);
          } catch (err) {
            this.emit('http:request', data);
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
