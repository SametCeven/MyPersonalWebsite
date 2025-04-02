import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"


export default function Projects() {
    const { data, loading, error } = useContext(GlobalContext)

    console.log(data)

    return (
        <section className="flex flex-col gap-5 border-b-1 py-10">
            <h1 className="py-10 text-5xl">Projects</h1>

            <div className="flex flex-wrap gap-10">

                {loading ? <p>Loading</p> : data.projects.projects.reverse().map((project, index) =>

                    <div className="flex gap-5 text-xs">

                        <img className="w-72 h-48 object-cover rounded-my2" key={index} src={project.imageUrl} alt={project.name} />

                        <div className="flex flex-col justify-between gap-5">
                            <h2 className="text-xl font-bold" key={project.name}> {project.name} </h2>
                            <ul className="italic">
                                {project.description.map((desc, index) =>
                                    <li key={index}>{desc}</li>
                                )}
                            </ul>
                            <div className="flex gap-5">
                                {project.tags.map((tag, index) =>
                                    <span className="p-1 border-1 border-c4 rounded-my1" key={index}>{tag}</span>
                                )}
                            </div>
                            <div className="flex gap-5">
                                <a key={project.githubUrl} href={project.githubUrl} > GitHub </a>
                                <a key={project.url} href={project.url} > Website </a>
                            </div>
                        </div>

                    </div>

                )}

            </div>


        </section>
    )


}