import './App.css';
import SelectCity from './components/SelectCity';
import DisplayWeather from './components/DisplayWeather';
import { WeatherProvider } from './Context/WeatherContext';

function App() {
 
 
  return (
    
      <div className="App">
        <h1>Weather<span className='textApp'>App</span></h1>
        <WeatherProvider>
          <SelectCity />
          <DisplayWeather />
        </WeatherProvider>
      </div>
    
  );
}

export default App;
