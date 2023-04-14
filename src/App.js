import './App.css';
import SelectCity from './components/SelectCity';
import DisplayWeather from './components/DisplayWeather';
import { WeatherProvider } from './Context/WeatherContext';

function App() {
 
 
  return (
    
      <div className="App">
        <h1>WeatherApp</h1>
        <WeatherProvider>
          <SelectCity />
          <DisplayWeather />
        </WeatherProvider>
      </div>
    
  );
}

export default App;
