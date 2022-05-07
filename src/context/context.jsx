import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import reducer from './reducer'
import { SET_MODE ,SET_COLOR } from './action';
const AppContext = createContext()

const initState = {}
const AppProvider = ({children}) => {
    const [isSidebar, setIsSidebar] = useState(false);
    const [modeState, dispatch] = useReducer(reducer,initState)
  
    const setMode = mode => {
    dispatch({ type: SET_MODE,payload: mode})
    }

    const setColor = color => {
    dispatch ({type: SET_COLOR,payload: color})
    }

    const handleSidebar = () => {
      setIsSidebar(!isSidebar);
    };
  
  
    return (
        <AppContext.Provider value={{
            ...modeState,
            handleSidebar,
            isSidebar,
            setMode,
            setColor,
            dispatch
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext,AppProvider}