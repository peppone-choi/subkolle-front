import axios from 'axios';

type OuterAxiosInstanceProp = {
  baseUrl: string;
  body: object | null;
  isCredentials: boolean;
};

const OuterAxiosInstance = ({ baseUrl, body, isCredentials }: OuterAxiosInstanceProp) => {
  return axios.create({
    baseURL: baseUrl,
    timeout: 1000,
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
