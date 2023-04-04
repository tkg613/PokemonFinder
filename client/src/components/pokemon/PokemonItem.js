import React from 'react'
import {Link} from 'react-router-dom'

const PokemonItem = ({pokemon, index}) => {

  const toTitleCase = function(text){
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
  }

  return (
    <div className='card shadow-md bg-base-100 compact side ml-8'>
      
      <div className='card-body flex-row space-x-4'>

        <div>
          <h1 className='card-title text-3xl'>#{index + 1}</h1>
        </div>

        <div>
          <h1 className='card-title text-3xl'>{toTitleCase(pokemon.name)}</h1>
        </div>

      </div>

      <div className='card-actions justify-end'>
        <Link to={`/pokemon/${pokemon.name}`} className='btn btn-accent m-4'>Details</Link>
      
      </div>
    </div>
  )
}

export default PokemonItem