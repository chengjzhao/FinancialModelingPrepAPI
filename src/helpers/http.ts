import axios from 'axios';
import { environment } from '../environments/environment';

const http = axios.create({
  baseURL: environment.apiUrl,
  timeout: 1000,
});

export { http };
