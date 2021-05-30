import axios from 'axios';

const instance = axios.create({
  baseURL: 'api.coincap.io/v2',
  headers: {
    'Accept-Encoding': 'gzip' || 'deflate',
  },
});

export default instance;
