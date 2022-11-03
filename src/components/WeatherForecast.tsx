import { useContext, useEffect, useState } from "react";
import { WeatherInterface } from "../models/WeatherInterface";
import { fetchWeather } from "../services/WeatherApi";
import {SearchContext} from "../context/SearchProvider";

export default function WeatherForecast(){
      
        const [lat, setLat] = useState<any>([]);
        const [long, setLong] = useState<any>([]);
        const [data, setData] = useState<any>([]);

        useEffect(() => {
         navigator.geolocation.getCurrentPosition(function(position){
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);

         }) 
          console.log("Latitude is:", lat);
          console.log("Longitude:", long);
        
        }, [lat, long]);

      useEffect(() => {
        fetchWeather(lat, long).then((data) => {
          console.log(data);
          setData(data);
          console.log(data);
        })
    }, [])
        
       return(
        <div></div>
       )
      }
