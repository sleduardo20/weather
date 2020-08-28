import axios from 'axios';

const api = axios.create({
  baseURL:
    'http://api.weatherapi.com/v1/forecast.json?key=93da2c4dbe254ed8bf121244202108&q=',
});

export default api;
