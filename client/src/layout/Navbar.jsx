import { useContext } from "react"
import { Link } from "react-router-dom"
import { GlobalContext } from "../contexts/GlobalContext"

export default function Navbar() {
    const { skillsSectionRef, projectsSectionRef, workExperienceSectionRef, educationSectionRef, scrollContainerRef } = useContext(GlobalContext)

    function scrollToSection(elementRef) {
        const container = scrollContainerRef.current
        const target = elementRef.current
        if (container && target) {
            container.scrollTo({
                top: target.offsetTop - 100,
                behavior: "smooth",
            })
        }
    }


    return (
        <nav className="py-10 flex flex-col gap-5">
            <Link className="nav-item" onClick={() => scrollToSection(skillsSectionRef)}>Skills</Link>
            <Link className="nav-item" onClick={() => scrollToSection(projectsSectionRef)} >Projects</Link>
            <Link className="nav-item" onClick={() => scrollToSection(workExperienceSectionRef)} >Work Experience</Link>
            <Link className="nav-item" onClick={() => scrollToSection(educationSectionRef)} >Education</Link>
        </nav>
    )
}