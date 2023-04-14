import { createContext, useContext, useState, useEffect } from "react";

const WeatherContext = createContext()

export const WeatherProvider = ({children})=> {

    const [data, setData] = useState({})
    const [city, setCity] = useState("Adana");

    const API_KEY ="364e6736a4967bfa1e86b821d90f9b7b";

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