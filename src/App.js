import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import City from './City';

function App() {

  const key = "2f31c953f686464322c14c5ad2730d2f";
  const [search, setSearch] = useState("")
  const [city, setCity] = useState();
  

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);

      
        setCity(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    getApi();
  }, [search])
  console.log(search)
  return (
    <div className="App">
      <div>
        <input type="text"
        onChange={(e) => setSearch(e.target.value)} 
        style={{ border: "1px solid black", width: "13rem", height: "1.5rem", background: "blanchedalmond" }} placeholder='Type city'
          />
        
        <City city = {city}/>
      </div>
    </div>
  );
}

export default App;
