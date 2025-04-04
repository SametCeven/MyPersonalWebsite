import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { GlobalContext } from "../contexts/GlobalContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer, faListCheck, faBriefcase, faBook } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
    const { skillsSectionRef, projectsSectionRef, workExperienceSectionRef, educationSectionRef, scrollContainerRef } = useContext(GlobalContext)
    const [activeSection, setActiveSection] = useState("skills");

    useEffect(() => {
        const container = scrollContainerRef.current
        const target = skillsSectionRef.current
        if (container && target) {
            container.scrollTo({
                top: target.offsetTop - 100,
                behavior: "smooth"
            })
            setActiveSection("skills")
            setTimeout(()=>{
                setupOberserver()
            },500)
        }
    }, [])

    function setupOberserver(){
        const container = scrollContainerRef.current
        if (!container) return

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                root: container,
                threshold: 0.5,
            }
        )

        const sections = [skillsSectionRef, projectsSectionRef, workExperienceSectionRef, educationSectionRef]
        sections.forEach((section) => {
            if (section.current) {
                observer.observe(section.current)
            }
        })

        return () => {
            sections.forEach((section) => {
                if (section.current) {
                    observer.unobserve(section.current)
                }
            })
        }

    }


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
        <nav className="sticky top-1 z-99 flex justify-between gap-5 font-bold text-xs py-1 px-5 w-[500px] bg-c3 rounded-my2">

            <div className={`nav-item ${activeSection === "skills" ? "nav-item-active" : ""}`} onClick={() => scrollToSection(skillsSectionRef)}>
                <FontAwesomeIcon icon={faComputer} />
                <Link>Skills</Link>
            </div>

            <div className={`nav-item ${activeSection === "projects" ? "nav-item-active" : ""}`} onClick={() => scrollToSection(projectsSectionRef)} >
                <FontAwesomeIcon icon={faListCheck} />
                <Link>Projects</Link>
            </div>

            <div className={`nav-item ${activeSection === "workExperience" ? "nav-item-active" : ""}`} onClick={() => scrollToSection(workExperienceSectionRef)} >
                <FontAwesomeIcon icon={faBriefcase} />
                <Link >Work Experience</Link>
            </div>

            <div className={`nav-item ${activeSection === "education" ? "nav-item-active" : ""}`} onClick={() => scrollToSection(educationSectionRef)}>
                <FontAwesomeIcon icon={faBook} />
                <Link  >Education</Link>
            </div>
        </nav>
    )
}