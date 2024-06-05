import { OuterAxiosInstanceProp } from '@/types/types';
import axios from 'axios';

const OuterAxiosInstance = ({ baseUrl, body, isCredentials }: OuterAxiosInstanceProp) => {
  return axios.create({
    baseURL: baseUrl,
    timeout: 300,
    data: JSON.stringify(body),
    withCredentials: isCredentials,
  });
};

export const BackendApiInstance = (bodyData: object | null) => {
  return OuterAxiosInstance({
    baseUrl: 'http://localhost:8080',
    isCredentials: true,
    body: bodyData,
  });
};

export default OuterAxiosInstance;
