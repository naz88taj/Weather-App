import axios from 'axios';
import Period, {Weather} from '../models/weather-model';

export default function getWeather(): Promise<Period[]> {
    return axios.get<Weather>("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
    .then((response) => response.data.properties.periods)
}