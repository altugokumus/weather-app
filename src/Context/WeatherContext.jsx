import { createContext, useContext, useState, useEffect } from "react";

const WeatherContext = createContext()

export const WeatherProvider = ({children})=> {

    const [data, setData] = useState({})
    const [city, setCity] = useState("İzmir");

    const API_KEY = process.env.REACT_APP_KEY;

    useEffect( () =>{

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data);
            })
    }, [city])


    console.log(data)

    const values = {data, setData, city, setCity};

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext);