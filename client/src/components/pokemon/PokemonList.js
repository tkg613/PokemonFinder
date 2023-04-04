import React from 'react'
import {useEffect, useState} from 'react'
import PokemonItem from './PokemonItem'

const PokemonList = () => {

  const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetchPokemon()
  }, [])

  const fetchPokemon = async function(){
    const response = await fetch(`${API_URL}?limit=151`)
    const data = await response.json()
    console.log(data)
    setPokemon(data)
  }

  if (pokemon.results !== undefined){
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {pokemon.results.map((p, index) => 
          <PokemonItem key={index} index={index} pokemon={p}/>
        )}
      </div>
    )
  } else {
    return <h3>Nothing found...</h3>
  }

  
}

export default PokemonList