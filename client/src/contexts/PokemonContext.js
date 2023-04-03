import { createContext } from "react";

const PokemonContext = createContext()

const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

export const PokemonProvider = ({children}) => {
  const initialState = {
    pokemon: [],
    loading: false
  }
}