import { createContext, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import useAxiosGet from "../hooks/useAxiosGet"

export const GlobalContext = createContext()
export default function GlobalContextProvider({children}){
    const [darkMode,setDarkMode] = useLocalStorage("darkMode",true)
    const [data,loading,error] = useAxiosGet("/data")

    return(
        <GlobalContext.Provider value={{darkMode,setDarkMode,data,loading,error}}>
            {children}
        </GlobalContext.Provider>
    )
}
