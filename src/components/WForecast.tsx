import getWeather from "../services/getWeather";
import { useState, useEffect } from "react";
import Period from "../models/weather-model";
import './WForecast.css';
export default function WForecast(){
    const [weather, setWeather] = useState<Period[]>([]);

    useEffect(() => {
        getWeather().then((data) => setWeather(data))
    }, [])

    return(
        <div className="container">
            {weather.map((day, index) => (
                <div className="row">
                    <h2>Day: {day.name}</h2>
                    <p className="card-text">Temperature: {day.temperature}</p>
                    <img src={day.icon} title="icon"/>
                    <p className="detail">DetailedForecCast: {day.detailedForecast}</p>
                </div>
            ))}
        </div>
    )
}