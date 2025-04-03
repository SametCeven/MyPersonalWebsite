import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"


export default function Projects() {
    const { data, loading, error } = useContext(GlobalContext)


    return (
        <section className="initial">

            <h1 className="title1">Projects</h1>

            <div className="flex flex-wrap justify-between gap-15">

                {loading ? <p>Loading</p> : data.projects.projects.reverse().map((project, index) =>

                    <div className="flex flex-col justify-between gap-3 w-[45%] text-xs" key={index}>
                        <h2 className="title2" key={project.name}> {project.name} </h2>
                        <img className="w-72 h-48 object-cover rounded-my2" key={index} src={project.imageUrl} alt={project.name} />
                        <ul className="">
                            {project.description.map((desc, index) =>
                                <li key={index}>{desc}</li>
                            )}
                        </ul>
                        <div className="flex gap-5">
                            {project.tags.map((tag, index) =>
                                <span className="tag" key={index}>{tag}</span>
                            )}
                        </div>
                        <div className="flex gap-5">
                            <a key={project.githubUrl} href={project.githubUrl} target="_blank"> GitHub </a>
                            <a key={project.url} href={project.url} target="_blank"> Website </a>
                        </div>
                    </div>

                )}

            </div>

        </section>
    )


}