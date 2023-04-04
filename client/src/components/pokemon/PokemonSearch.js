import React from 'react'
import { useState, useContext } from 'react'
import PokemonContext from '../../contexts/pokemon/PokemonContext'

const PokemonSearch = () => {

  const [text, setText] = useState('')

  const {pokemon, fetchPokemon, clearPokemon} = useContext(PokemonContext)

  const handleChange = function(event){
    setText(event.target.value)
  }

  const handleClick = function(){
    clearPokemon()
  }

  const handleSubmit = function(event){
    event.preventDefault()
    if (text === '') {
      alert('Please enter something.')
    } else {
      fetchPokemon(text)
      setText('')
    }
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit} className='form-control ml-8'>
          <div className='relative'>
            <input 
              type='text' 
              className='w-full pr-40 bg-gray-200 input input-lg text-black' 
              placeholder='Search' 
              onChange={handleChange}
              value={text}
            />
            <button type='submit' className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>
              Go
            </button>
          </div>
        </form>
      </div>
        {pokemon.length > 0 && (
          <div>
            <button onClick={handleClick} className='btn btn-ghost btn-lg'>Clear</button>
          </div>
        )}
    </div>
  )
}

export default PokemonSearch