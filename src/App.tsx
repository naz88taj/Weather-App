import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
//import WeatherForecast from './components/WeatherForecast';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Main/>
      </Router>
     {/* <WeatherForecast/> */}
    </div>
  );
}

export default App;
