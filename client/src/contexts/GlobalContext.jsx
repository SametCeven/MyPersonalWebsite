import { createContext, useRef, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import useAxiosGet from "../hooks/useAxiosGet"

export const GlobalContext = createContext()
export default function GlobalContextProvider({children}){
    const [darkMode,setDarkMode] = useLocalStorage("darkMode",true)
    const [data,loading,error] = useAxiosGet("/data")
    const skillsSectionRef = useRef(null)
    const projectsSectionRef = useRef(null)
    const workExperienceSectionRef = useRef(null)
    const educationSectionRef = useRef(null)
    const scrollContainerRef = useRef(null)

    return(
        <GlobalContext.Provider value={{darkMode,setDarkMode,data,loading,error,skillsSectionRef,projectsSectionRef,workExperienceSectionRef,educationSectionRef,scrollContainerRef}}>
            {children}
        </GlobalContext.Provider>
    )
}
