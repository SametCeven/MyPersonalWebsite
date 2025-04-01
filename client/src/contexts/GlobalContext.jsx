import { createContext, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

export const GlobalContext = createContext()
export default function GlobalContextProvider({children}){
    const [darkMode,setDarkMode] = useLocalStorage("darkMode",true)


    return(
        <GlobalContext.Provider value={{darkMode,setDarkMode}}>
            {children}
        </GlobalContext.Provider>
    )
}
