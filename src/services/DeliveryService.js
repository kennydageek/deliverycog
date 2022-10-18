import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://www.exampleapi.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
