import axios from 'axios';

export const api = axios.create({
  baseURL:
    'https://api.weatherapi.com/v1/forecast.json?key=49a17211b4614e59bb5194817202808&q=',
});
