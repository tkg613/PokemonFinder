import { createContext, useState } from "react";

const PokemonContext = createContext()

const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

export const PokemonProvider = ({children}) => {

  const [pokemon, setPokemon] = useState([])

  const fetchPokemon = async function(){
    const response = await fetch(`${API_URL}?limit=151`)
    const data = await response.json()
    console.log(data)
    setPokemon(data)
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        fetchPokemon
      }}
    >
      {children}
    </PokemonContext.Provider>
  )

}

export default PokemonContext

