import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInternetExplorer } from '@fortawesome/free-brands-svg-icons'


export default function Projects() {
    const { data, loading, error, projectsSectionRef, darkMode } = useContext(GlobalContext)


    return (
        <section className="initial" ref={projectsSectionRef} id="projects">

            <h1 className="title1">Projects</h1>

            <div className="flex flex-wrap justify-between gap-15 max-xl:flex-col">

                {loading ? <p>Loading</p> : data.projects.projects.map((project, index) =>

                    <div className="flex gap-10 text-xs max-lg:flex-col max-xl:gap-5" key={index}>

                        <div>
                            <a href={project.githubUrl} target="_blank">
                                <img className="w-72 h-48 object-cover rounded-my2" key={index} src={project.imageUrl} alt={project.name} />
                            </a>
                        </div>

                        <div className="flex flex-col justify-between max-xl:gap-5">
                            <a href={project.githubUrl} target="_blank">
                                <h2 className="title2" key={project.name}> {project.name} </h2>
                            </a>

                            <ul className="">
                                {project.description.map((desc, index) =>
                                    <li key={index}>{desc}</li>
                                )}
                            </ul>
                            <div className="flex gap-5">
                                {project.tags.map((tag, index) =>
                                    <span className={`${darkMode ? "tag-dm" : "tag"}`} key={index}>{tag}</span>
                                )}
                            </div>
                            <div className="flex gap-5">
                                <a className={`${darkMode ? "logo-hover-dm" : "logo-hover"}`} key={project.githubUrl} href={project.githubUrl} target="_blank">
                                    <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                                </a>
                                <a className={`${darkMode ? "logo-hover-dm" : "logo-hover"}`} key={project.url} href={project.url} target="_blank">
                                    <FontAwesomeIcon icon={faInternetExplorer} className="text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>

                )}

            </div>

        </section>
    )


}