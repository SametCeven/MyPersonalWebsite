import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"


export default function WorkExperience() {
    const { data, loading, error, workExperienceSectionRef } = useContext(GlobalContext)


    return (
        <section className="initial" ref={workExperienceSectionRef}>

            <h1 className="title1">Work Experience</h1>

            <div className="flex flex-wrap justify-between gap-10 text-xs">

                {loading ? <p>Loading</p> : data.workExperience.workExperience.map((work, index) =>

                    <div className="flex flex-col gap-3 w-full" key={index}>
                        <div className="flex flex-col">
                            <span className="title2"> {work.title} </span>
                            <span className="title2"> {work.company} </span>
                            <div>
                                <span> {work.startingDate} </span>
                                <span> - </span>
                                <span> {work.endDate} </span>
                            </div>
                        </div>
                        <ul className="">
                            {work.description.map((desc, index) =>
                                <li key={index}>{desc}</li>
                            )}
                        </ul>
                    </div>

                )}

            </div>

        </section>
    )


}