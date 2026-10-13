
import { useState } from "react";

export default function Search({ setWeather }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState("");

    const handlesubmit = async () => {
        if (!city.trim()) {
            setError("Please enter a city name.");
            return;
        }

        const APIkey = "676da1c9cc33256ee29eb2653f0b9f05";

        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city.trim())},IN&appid=${APIkey}&units=metric`;

        try {
            setError("");

            const response = await fetch(URL);
            const resjson = await response.json();

            if (!response.ok) {
                setError(resjson.message || "Unable to fetch weather.");
                return;
            }

            setWeather(resjson);
        } catch (err) {
            setError("Network error. Please try again.");
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={handleChange}
            />

            <button onClick={handlesubmit}>Search</button>

            {error && <p>{error}</p>}
        </div>
    );
}

