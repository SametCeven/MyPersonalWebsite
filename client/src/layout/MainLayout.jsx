import { useContext } from "react"
import "./MainLayout.css"
import { GlobalContext } from "../contexts/GlobalContext"

export default function MainLayout() {
    const { data, loading, error } = useContext(GlobalContext)

    return (
        <main className="w-100vw h-100vh">
            <p>main</p>
            {loading ? <p>Loading</p> : data.projects.projects.map((project,index)=>
                <img key={index} src={project.imageUrl} alt={project.name} />
            )}
            
                        
        </main>
    )

}