import { createContext, useReducer } from "react";
import AlertReducer from './AlertReducer'


const AlertContext = createContext()

export const AlertProvier = function ({children}) {
  const initialState = null
  const [state, dispatch] = useReducer(AlertReducer, initialState)

  // Set alert
  const setAlert = function(message, type) {
    dispatch({
      type: 'SET_ALERT',
      payload: {message: message, type: type}
    })
    setTimeout(() => 
      dispatch({
        type: 'REMOVE_ALERT'
      }), 3000
    )
  }

  return (
    <AlertContext.Provider
      value={{alert: state, setAlert}}
    > 
      {children}
    </AlertContext.Provider>)

}

export default AlertContext