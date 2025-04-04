import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"


export default function Skills() {
    const { data, loading, error, skillsSectionRef, darkMode } = useContext(GlobalContext)


    return (
        <section className="flex flex-col border-b-1 pb-15" ref={skillsSectionRef} id="skills">

            <h1 className="title1">Skills</h1>

            <div className="flex flex-col gap-5 text-xs">

                <div className="flex items-center gap-15 h-20">
                    <h2 className="title2">Front-end</h2>
                    <div className="flex gap-10 p-5 ">
                        {loading ? <p>Loading</p> : data.skills.skills.frontend.map((skill, index) =>
                            <div className="flex items-center justify-center gap-5 logo-hover-noclick" key={index} >
                                <img className="w-12" key={skill.id} src={skill.url} alt={skill.name} />
                                <span className={`${darkMode ? "text-c4" : "text-c1"}`} key={skill.name}> {skill.name} </span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-15 h-20">
                    <h2 className="title2">Back-end</h2>
                    <div className="flex gap-10 p-5">
                        {loading ? <p>Loading</p> : data.skills.skills.backend.map((skill, index) =>
                            <div className="flex items-center justify-between gap-5 logo-hover-noclick" key={index} >
                                <img className="w-12" key={skill.id} src={skill.url} alt={skill.name} />
                                <span className={`${darkMode ? "text-c4" : "text-c1"}`} key={skill.name}> {skill.name} </span>
                            </div>
                        )}
                    </div>
                </div>

            </div>

        </section>
    )


}