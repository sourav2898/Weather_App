import axios from 'axios';
import React,{useState} from 'react';
import API_KEY from './api';
import Input from './Input';
import Display from './Display';

function App() {

  const [city,setCity] = useState("");
  const [data,setData] = useState({});
  const [location,setLocation] = useState("");
  const [lat,setLat] = useState("");
  const [long,setLong] = useState("");
  const [temp,setTemp] = useState("");
  const [err,setError] = useState("");

  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  function get(){
    axios.get(API)
    .then( (res) => {
      // console.log("res",res);
      setData(res.data)
      setLocation(city);
      setLat(data.coord.lat);
      setLong(data.coord.lon);
      setTemp(data.main.temp);
    })
    .catch(err => setError(err));
    // console.log("data",data);
    setCity("");
  }

  return (
    <>
      <Input city={city} setCity={setCity} get={get} setError={setError}/>
      <Display location={location} lat={lat} long={long} temp={temp} err={err} />
    </>
  );
}

export default App;
