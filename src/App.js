import axios from 'axios';
import React,{useState} from 'react';
import API_KEY from './api';
import Input from './Input';
import Display from './Display';

function App() {

  const [city,setCity] = useState("");
  // const [data,setData] = useState({});
  const [location,setLocation] = useState("NA");
  const [lat,setLat] = useState("NA");
  const [long,setLong] = useState("NA");
  const [temp,setTemp] = useState("0");
  const [err,setError] = useState("");

  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  async function get(){
    const res = await axios.get(API);
      // setData(res.data);
      console.log("res",res);
      // console.log("data",data);
      setLocation(res.data.name);
      setLat(res.data.coord.lat);
      setLong(res.data.coord.lon);
      setTemp(res.data.main.temp);
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
