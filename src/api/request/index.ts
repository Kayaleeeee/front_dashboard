import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (!error.response) {
      return Promise.reject(error);
    }

    switch (error.response.status) {
      case 401:
        window.localStorage.removeItem('localStorage');
        window.location.assign('/');
        break;
    }

    return Promise.reject(error.response);
  },
);

const getAuthorization = () => {
  const localStorage = window.localStorage.getItem('localStorage');
  if (!localStorage || !localStorage.includes('accessTokenState')) {
    return {
      Authorization: '',
    };
  }

  const accessToken = JSON.parse(localStorage).accessTokenState;
  if (!accessToken) {
    return { Authorization: '' };
  }

  return {
    Authorization: `Bearer ${JSON.parse(localStorage).accessTokenState}`,
  };
};

function request(config: AxiosRequestConfig, endpoint: string) {
  config.headers = {
    'Content-Type': 'application/json',
    ...config.headers,
  };

  const API_VERSION = `v1`;
  config.baseURL = `${endpoint}/${API_VERSION}`;

  config.paramsSerializer = function (params) {
    // @ts-ignore
    return stringify(decamelizeKeys(params));
  };

  return axios(config);
}

export const requestToServer = (config: AxiosRequestConfig) => {
  config.headers = {
    ...config.headers,
    ...getAuthorization(),
  };

  return request(config, process.env.REACT_APP_API_END_POINT!);
};
