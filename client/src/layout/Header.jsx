import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import SliderCheckbox from "../components/SliderCheckbox"

export default function Header() {
    const { darkMode, setDarkMode } = useContext(GlobalContext)
    
    function handleDarkMode() {
        if (darkMode === true) setDarkMode(false)
        else setDarkMode(true)
    }

    

    return (
        <header className={`py-5`}>
            <SliderCheckbox value={darkMode} handleValue={handleDarkMode} text="Dark Mode"></SliderCheckbox>
        </header>
        
    )
}