import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export default function Skills() {
    const { data, loading, error, skillsSectionRef } = useContext(GlobalContext)


    return (
        <section className="flex flex-col border-b-1 pb-15" ref={skillsSectionRef}>

            <h1 className="title1">Skills</h1>

            <div className="flex gap-15 text-xs">

                <div className="flex flex-col gap-5">
                    <h2 className="title2">Front-end</h2>
                    <div className="flex gap-10 border-1 p-5 border-c4 rounded-my2">
                        {loading ? <p>Loading</p> : data.skills.skills.frontend.map((skill, index) =>
                            <div className="flex flex-col items-center justify-between gap-5" key={index} >
                                <img className="w-8 h-8" key={skill.id} src={skill.url} alt={skill.name} />
                                <span className="text-c4" key={skill.name}> {skill.name} </span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <h2 className="title2">Back-end</h2>
                    <div className="flex gap-10 border-1 p-5 border-c4 rounded-my2">
                        {loading ? <p>Loading</p> : data.skills.skills.backend.map((skill, index) =>
                            <div className="flex flex-col items-center justify-between gap-5" key={index} >
                                <img className="w-8 h-8" key={skill.id} src={skill.url} alt={skill.name} />
                                <span className="text-c4" key={skill.name}> {skill.name} </span>
                            </div>
                        )}
                    </div>
                </div>

            </div>

        </section>
    )


}