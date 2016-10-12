import axios from 'axios';

const API_KEY='7f9fa11b4f266beccd4d72858b6bc0f2';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast/city?APPID=${API_KEY}`;
export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}