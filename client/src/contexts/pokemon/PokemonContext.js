import { createContext, useReducer } from "react";
import pokemonReducer from "./PokemonReducer";

const PokemonContext = createContext()

const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

export const PokemonProvider = ({children}) => {

  const initialState = {
    pokemon: [],
    // Pokemon object for a specific pokemon
    singlePokemon: {
      name: '',
      types: [],
      height: '',
      weight: '',
      sprites: [],
      moves: []
    }
  }

  const [state, dispatch] = useReducer(pokemonReducer, initialState)

  // Search pokemon based on user input
  const fetchPokemon = async function(text){

    const response = await fetch(`${API_URL}?limit=151`)
    const data = await response.json()

    // Filter data based on search
    const searchResult = data.results.filter(item => item.name.includes(text.toLowerCase()))
    
    // Dispatch takes action object as argument
    dispatch({
      type: 'GET_POKEMON',
      payload: searchResult
    })
  }

  // Get info of a specific pokemon selected by the user
  const fetchSinglePokemon = async function(name){

    const response = await fetch(`${API_URL}${name}`)

    if (response.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await response.json()

      dispatch({
        type: 'GET_SINGLE_POKEMON',
        payload: data
      })
    }
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
        singlePokemon: state.singlePokemon,
        fetchPokemon,
        fetchSinglePokemon,
        clearPokemon
      }}
    >
      {children}
    </PokemonContext.Provider>
  )

}

export default PokemonContext

