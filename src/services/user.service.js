import httpClient from 'axios';
import config from '../config';
import { makeRequest } from './http.service';

const base_url = `${config.api_url}/user`;

export const login = (bodyData) => makeRequest(httpClient.post(`${base_url}/login`, bodyData));

export const register = (bodyData) => makeRequest(httpClient.post(`${base_url}/login`, bodyData));
