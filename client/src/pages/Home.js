import React from 'react'

import PokemonList from '../components/pokemon/PokemonList'
import PokemonSearch from '../components/pokemon/PokemonSearch'

const Home = () => {
  return (
    <div>
      <PokemonSearch />
      <PokemonList />
    </div>
  )
}

export default Home