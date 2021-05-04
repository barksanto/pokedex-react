import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonGrid from './components/PokemonGrid'
import Search from './components/Search'


const App = () => {

  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      console.log(query)
      const result = await axios(`https://pokeapi.co/api/v2/pokemon/${query}`)
      console.log(result.data)
      setItems(result.data)
    }
    fetchItems()
  }, [query])

  return (
    <div className="App">
      <Search getQuery={(q) => setQuery(q)} />
      {/* <PokemonGrid pokemonList={items} /> */}
    </div>
  );
}

export default App;
