import React, {useState} from "react";
import axios from "axios";



function App() {

const [data, setData] = useState({})
const [location, setLocation] = useState('')



const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e40f27358701be2d9a433cf3bfe36308&units=metric&lang=sv`;

const searchLocation = (event) => {
  if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
}

  return (
    <div className="App">
      <div className="inputpos">
        <input className="stad"
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Stad please"
        ></input>
        </div>
      <div className="container">
      <div className="top">
      
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
        {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
        </div>
        <div className="description">
        {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
        </div>
        <div className="humidity">
        {data.main ? <p>{data.main.humidity}%</p> : null}
        </div>
        <div className="wind">
        {data.wind ? <p>{data.wind.speed.toFixed()}m/s</p> : null}
        </div>
      </div>
      </div>
    </div>
  )
}

export default App;
