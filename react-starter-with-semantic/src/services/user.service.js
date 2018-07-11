import httpClient from 'axios';
import config from '../config';

const base_url = `${config.api_url}/user`

export const login = (bodyData) => httpClient.post(`${base_url}/login`, bodyData);