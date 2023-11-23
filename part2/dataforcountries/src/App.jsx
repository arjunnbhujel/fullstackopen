import { useEffect, useState } from "react"
import "./App.css"
import axios from "axios"
import CountryDetails from "./components/CountryDetails"
import Weather from "./components/Weather"

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState("")
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data)
      })
      .catch((error) => {
        console.error("Error Fetching Data:", error)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setSelectedCountry(null)
  }

  const handleShowClick = (country) => {
    setSelectedCountry(country)
  }

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Find Countries</h2>
      <input type="text" value={filter} onChange={handleFilterChange} />

      {filteredCountries.length === 1 ? (
        <div>
          <CountryDetails country={filteredCountries[0]} />
          <Weather capital={filteredCountries[0].capital[0]} />
        </div>
      ) : filteredCountries.length > 10 ? (
        <p>'Too Many Matches, Specify More Filters'</p>
      ) : (
        <div>
          {filteredCountries.map((country) => (
            <div key={country.name.common}>
              {country.name.common}{" "}
              <button onClick={() => handleShowClick(country)}>
                {selectedCountry === country ? "Hide" : "Show"}
              </button>
              {selectedCountry === country && (
                <div>
                  <CountryDetails country={selectedCountry} />
                  <Weather capital={country.capital[0]} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
