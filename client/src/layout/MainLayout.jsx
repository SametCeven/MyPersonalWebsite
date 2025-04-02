import Skills from "../components/Skills"
import Projects from "../components/Projects"
import WorkExperience from "../components/WorkExperience"
import Education from "../components/Education"

export default function MainLayout() {
   

    return (
        <main className="w-100vw h-100vh">
            
            <Skills></Skills>
            <Projects></Projects>
            <WorkExperience></WorkExperience>
            <Education></Education>
            
                        
        </main>
    )

}