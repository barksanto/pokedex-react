import React from 'react'
import '../styles/SearchedPokemon.css'
import axios from 'axios'


const SearchedPokemon = ({ currentPokemon }) => {

  return (currentPokemon.name ?
    (<div class="card-product">
      <img src={currentPokemon.sprites.front_default} />
      <div class="card-product-infos">
        <h2>{currentPokemon.name}</h2>
        <p>Product description with <strong>relevant info</strong> only.</p>
      </div>
    </div>
    ) : <h1>Search for a Pokemon!</h1>
  )
}

export default SearchedPokemon
