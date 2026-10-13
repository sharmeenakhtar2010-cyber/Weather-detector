
import { useState } from "react";
import Weather from "./WeatherCard";
import Search from "./SearchBox";

function App() {
    const [weather, setWeather] = useState(null);

    return (
        <div>
            <h1>Weather App</h1>

            <Search setWeather={setWeather} />

            <Weather weather={weather} />
        </div>
    );
}

export default App;
