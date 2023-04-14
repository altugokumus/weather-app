import React from 'react'
import { useWeather } from '../Context/WeatherContext';

function SelectCity() {
    const { setCity } = useWeather();

    const handleChange = (e) => {
        setCity(e.target.value);
    }

  return (
    <div>
        <select onChange={handleChange} name="cities" id="cities">
            <option value="İzmir">İzmir</option>
            <option value="İstanbul">İstanbul</option>
            <option value="Ankara">Ankara</option>
            <option value="Adana">Adana</option>
            <option value="Antalya">Antalya</option>
        </select>
    </div>
  )
}

export default SelectCity