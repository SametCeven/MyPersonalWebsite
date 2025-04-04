import { useContext, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { GlobalContext } from "../contexts/GlobalContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer, faListCheck, faBriefcase, faBook } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
    const { skillsSectionRef, projectsSectionRef, workExperienceSectionRef, educationSectionRef, scrollContainerRef, darkMode } = useContext(GlobalContext)

    function getScrollOffset(){
        let size = window.innerWidth 
        if(size > 1200) return 100
        else if(size > 1000) return 250
        else if(size > 750) return 275
        else if(size > 400) return 400
        else if (size > 0) return 350
    }


    function scrollToSection(sectionRef) {
        const container = scrollContainerRef.current
        const target = sectionRef.current
        if (container && target) {
            container.scrollTo({
                top: target.offsetTop - getScrollOffset(),
                behavior: "smooth",
            })
        }
    }



    return (
        <nav className={`sticky top-1 z-99 flex justify-between items-center gap-5 font-bold text-xs py-1 px-5 w-[500px] rounded-my2 text-white bg-c3 max-md:gap-1 max-md:w-[300px] max-md:flex-wrap`}>

            <div className={`nav-item`} onClick={() => scrollToSection(skillsSectionRef)}>
                <FontAwesomeIcon icon={faComputer} />
                <Link>Skills</Link>
            </div>

            <div className={`nav-item`} onClick={() => scrollToSection(projectsSectionRef)} >
                <FontAwesomeIcon icon={faListCheck} />
                <Link>Projects</Link>
            </div>

            <div className={`nav-item`} onClick={() => scrollToSection(workExperienceSectionRef)} >
                <FontAwesomeIcon icon={faBriefcase} />
                <Link >Work Experience</Link>
            </div>

            <div className={`nav-item`} onClick={() => scrollToSection(educationSectionRef)}>
                <FontAwesomeIcon icon={faBook} />
                <Link  >Education</Link>
            </div>
        </nav>
    )
}