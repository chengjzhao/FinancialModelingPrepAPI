import axios, { AxiosInstance } from 'axios';
import { environment } from '../environments/environment';

export interface HttpComponent {
  request: AxiosInstance;
}

const http = axios.create({
  baseURL: environment.apiUrl,
  timeout: 1000,
});

export { http };
