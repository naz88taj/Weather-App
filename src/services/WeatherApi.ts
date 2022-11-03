import axios from 'axios';
import { WeatherInterface } from '../models/WeatherInterface';

const weatherKey = process.env.REACT_APP_WEATHER_API_KEY || "";

export function fetchWeather(lat: any, long: any){
    return axios.get
    (`https://api.openweathermap.org/data/2.5/weather?&lat=${lat}&lon=${long}&exclude=hourly,daily&units=metric&APPID=${weatherKey}`,
    )
    .then(res => res.data)
}

