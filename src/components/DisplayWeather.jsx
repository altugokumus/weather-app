import React, { useEffect } from 'react'
import { useWeather } from '../Context/WeatherContext'

const DisplayWeather = () => {

    const { data, city } = useWeather();

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    
    const today = days[new Date().getDay()];
    

  return (
    <div className='container'>
        {data.main && data && <div className='card'>
          <p>{today}</p>
          <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="icon" />
          <p><span><strong>{Math.floor(data.main.temp_max)}°C</strong></span> / <span>{Math.floor(data.main.temp_min)}°C</span></p>
        </div>
          }
    </div>  
  )
}

export default DisplayWeather