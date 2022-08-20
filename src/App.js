import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';



function App() {


  const [coins,setCoins] = useState([]);

  //Function to get the values and it also through all the data

  const [search,setSearch] = useState('')

  // Adding Function for the API
  useEffect(() =>{
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    })
    .catch(err => console.log(err))
  },[]);

  const handleChange = e => {
    setSearche(e.target.value)
  }

  // Function which allow us to filter the actual coin and displays whatever we type in 

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowercase()) //converting everething in lower case
    )
  return (
  
    <div className="coin-app">
      <div className = "coin-search">
        <h1 className = "coin-text"> Search a Currency</h1>
          <form >
            <input type = "text"  placeholder="Search" className = "coin-input" onChange={handleChange}></input>
          </form>

      </div>
    </div>
  );
}

export default App;
