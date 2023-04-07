import React from 'react'
import { useEffect, useContext } from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import PokemonContext from '../contexts/pokemon/PokemonContext'
import { colors } from '../utils/PokemonColor'
import {RiRulerLine, RiScales2Line} from 'react-icons/ri'
import {BsCircleFill} from 'react-icons/bs'

const Pokemon = () => {

  const {singlePokemon, fetchSinglePokemon} = useContext(PokemonContext)

  const params = useParams()

  useEffect(() => {
    fetchSinglePokemon(params.name)
  }, [])

  const {name, types, height, weight, sprites, moves} = singlePokemon

  const toTitleCase = function(text){
    const titleCase = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
    return titleCase.replace('-', ' ')
  }


  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/' className='btn btn-ghost'>Back to Search</Link>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='image-full card-side rounded-lg shadow-xl bg-base-300'>
              <figure>
                <img src={sprites.front_default} alt='pokemon sprite' />
              </figure>
              <div className='card-body justify-end'>
                <h1 className='card-title mb-0 text-6xl'>{toTitleCase(name)}</h1>
              </div>
            </div>
          </div>

          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title mb-8 mt-5'>
                {toTitleCase(name)}
              </h1>
              <div className='flex items-center mb-2'>
                <RiRulerLine className='mr-3' />
                <p>Height: {height * 10} cm</p>
              </div>
              <div className='flex items-center'>
                <RiScales2Line className='mr-3' />
                <p>Weight: {weight / 10} kg</p>
              </div>

              <h1 className='text-3xl mt-10 mb-1'>Type(s):</h1>
              {types.map((type, index) => {
                return (
                  <div key={index}>
                    <div className='ml-4 mt-3 flex items-center'>
                      <BsCircleFill className='mr-2' color={`${colors[type.type.name]}`}/>
                      <p>{type.type.name}</p>
                    </div>
                  </div>
                )
              })}
              <h1 className='mt-10 text-3xl mb-3'>Moves:</h1>
              <div className='ml-4 h-60 w-80 overflow-scroll overflow-x-hidden'>
                {moves.map((move, index) => {
                  return (                    
                      <ul key={index} className=''>
                        <li className='text-2xl my-2'>{toTitleCase(move.move.name)}</li>
                      </ul>
                  )
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Pokemon