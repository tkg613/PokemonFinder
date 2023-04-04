import React from 'react'
import {useEffect, useContext} from 'react'
import PokemonItem from './PokemonItem'
import PokemonContext from '../../contexts/pokemon/PokemonContext'

const PokemonList = () => {

  const {pokemon, fetchPokemon} = useContext(PokemonContext)

  useEffect(() => {
    fetchPokemon()
  }, [])

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
  // Floating to-top button
  
}

export default PokemonList