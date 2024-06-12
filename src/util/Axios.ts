import { OuterAxiosInstanceProp } from '@/types/types';
import axios from 'axios';

const OuterAxiosInstance = ({ baseUrl, isCredentials }: OuterAxiosInstanceProp) => {
  return axios.create({
    baseURL: baseUrl,
    timeout: 300,
    withCredentials: isCredentials,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8080',
    },
  });
};

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.error('Request Error');
  },
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 400) {
      console.error('Bad Request');
    }
    if (error.response.status === 401) {
      console.error('Unauthorized');
    }
    if (error.response.status === 403) {
      console.error('Forbidden');
    }
    if (error.response.status === 404) {
      console.error('Not Found');
    }
    if (error.response.status === 500) {
      console.error('Internal Server Error');
    }
    return Promise.resolve(error);
  },
);

export const BackendApiInstance = () => {
  return OuterAxiosInstance({
    baseUrl: 'http://localhost:8080',
    isCredentials: true,
  });
};

export default OuterAxiosInstance;
