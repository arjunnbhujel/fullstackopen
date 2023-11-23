import axios from "axios"
import { useState, useEffect } from "react"

const Weather = ({ capital }) => {
  const [weatherData, setWeatherData] = useState(null)
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY

  console.log(capital)

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${apiKey}`
        )
        setWeatherData(response.data)
      } catch (error) {
        console.error("Error Fetching Data: ", error)
      }
    }

    if (capital) {
      fetchWeatherData()
    }
  }, [apiKey, capital])

  const temperature = weatherData && weatherData.main && weatherData.main.temp

  const icon = weatherData && weatherData.weather && weatherData.weather[0].icon

  const wind = weatherData && weatherData.wind && weatherData.wind.speed

  const weaatherDescription =
    weatherData && weatherData.weather && weatherData.weather[0].description

  console.log(weaatherDescription)

  return (
    <div>
      <h2>Weather in {capital}</h2>
      {temperature && (
        <p>
          <strong>Temperature: </strong>
          {temperature} Celsius
        </p>
      )}
      {icon && (
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={weatherData && weatherData.weather[0].description}
        />
      )}
      {wind && (
        <p>
          <strong>Wind Speed: </strong>
          {wind} m/s
        </p>
      )}
    </div>
  )
}

export default Weather
