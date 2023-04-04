import { createContext } from "react";

const PokemonContext = createContext()

const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

export const PokemonProvider = ({children}) => {
  const initialState = {
    pokemon: [],
    loading: false
  }

  const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

  const fetchPokemon = async function(){
    const response = await fetch(`${API_URL}?limit=151`)
    const data = await response.json()
    console.log(data)
    
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemon: '',
      }}
    >
      {children}
    </PokemonContext.Provider>
  )

}

