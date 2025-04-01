import "./Header.css"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import SliderCheckbox from "../components/sliderCheckbox"

export default function Header() {
    const { darkMode, setDarkMode } = useContext(GlobalContext)
    
    function handleDarkMode() {
        if (darkMode === true) setDarkMode(false)
        else setDarkMode(true)
    }

    

    return (
        <header className={`py-5 px-30 flex justify-end`}>
            <SliderCheckbox value={darkMode} handleValue={handleDarkMode} text="Dark Mode"></SliderCheckbox>
        </header>
        
    )
}