import axios from 'axios';

export const api = axios.create({
  baseURL: `http://${window.location.hostname}:3001/api`,
});

export const configureApi = (token: string, signOut: () => void) => {
  api.defaults.headers.authorization = `Bearer ${token}`;
  api.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response.status === 401) {
        signOut();
      }
      return Promise.reject(error);
    },
  );
};

export const apiRoutes = {
  users: '/users',
  messages: '/messages',
};
