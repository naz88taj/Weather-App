import { Route, Routes } from "react-router-dom";
import WeatherForecast from "./WeatherForecast";
import WForecast from "./WForecast";

export default function NavPage(){
    return(
        <div>
            <Routes>
                <Route path="/weather" element={<WForecast/>}/>
                {/* <Route path="/lat" element={<WeatherForecast/>}/> */}
            </Routes>
        </div>
    )
}