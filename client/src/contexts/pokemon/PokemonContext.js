import { createContext, useReducer } from "react";
import pokemonReducer from "./PokemonReducer";

const PokemonContext = createContext()

const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

export const PokemonProvider = ({children}) => {

  const initialState = {
    pokemon: []
  }

  const [state, dispatch] = useReducer(pokemonReducer, initialState)

  // Search pokemon based on user input
  const fetchPokemon = async function(text){

    const response = await fetch(`${API_URL}?limit=151`)
    const data = await response.json()

    // console.log('data:', data)

    // Filter data based on search
    const searchResult = data.results.filter(item => item.name.includes(text.toLowerCase()))

    // console.log('result:', searchResult)
    
    // Dispatch takes action object as argument
    dispatch({
      type: 'GET_POKEMON',
      payload: searchResult
    })
  }

  // Clear list of pokemon from search screen once user clicks Clear button
  const clearPokemon = function(){
    dispatch({
      type: 'CLEAR_POKEMON',
      payload: []
    })
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemon: state.pokemon,
        fetchPokemon,
        clearPokemon
      }}
    >
      {children}
    </PokemonContext.Provider>
  )

}

export default PokemonContext

