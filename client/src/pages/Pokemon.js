import React from 'react'
import { useEffect, useContext } from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import PokemonContext from '../contexts/pokemon/PokemonContext'


const Pokemon = () => {

  const {singlePokemon, fetchSinglePokemon} = useContext(PokemonContext)

  const params = useParams()

  useEffect(() => {
    fetchSinglePokemon(params.name)
  }, [])

  const {name, types, height, weight, sprites} = singlePokemon

  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/' className='btn btn-ghost'>Back to Search</Link>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='card rounded-lg shadow-xl image-full'>
              <figure>
                <img src={sprites.front_default} alt='pokemon sprite' />
              </figure>
              <div className='card-body justify-end'>
                <h2 className='card-title mb-0'>{name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pokemon