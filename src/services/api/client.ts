import axios from 'axios';
import { getToken } from '../storage';
import { clearToken } from './utils';
//
const API = axios.create({
  baseURL: '',
});

API.interceptors.request.use(async config => {
  const token = clearToken(await getToken());

  if (typeof token === 'string') {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;
