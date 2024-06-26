import axios from 'axios'

const client = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });

export const request = async ({ url, params = {}, ...rest }) => {




  client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;

  const onSuccess = response => response;

  const onError = error => {

    if (error.response && error.response.status == 401) {

      window.localStorage.removeItem('userData')
      window.localStorage.removeItem('accessToken')
      window.location.href = '/login';





    }


    return Promise.reject(error);
  };

  return client({ url, params, ...rest }).then(onSuccess).catch(onError);
};
