import React from 'react'
import {useContext} from 'react'
import PokemonItem from './PokemonItem'
import PokemonContext from '../../contexts/pokemon/PokemonContext'

const PokemonList = () => {

  const {pokemon} = useContext(PokemonContext)

  if (pokemon !== undefined){
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {pokemon.map((p, index) => 
          <PokemonItem key={index} index={index} pokemon={p}/>
        )}
      </div>
    )
  } 
  // Floating to-top button
  
}

export default PokemonList