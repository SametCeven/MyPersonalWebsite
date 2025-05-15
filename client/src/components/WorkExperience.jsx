import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"


export default function WorkExperience() {
    const { data, loading, error, workExperienceSectionRef } = useContext(GlobalContext)


    return (
        <section className="initial max-md:text-xs" ref={workExperienceSectionRef} id="workExperience">

            <h1 className="title1">Work Experience</h1>

            <div className="flex flex-wrap justify-between gap-10">

                {loading ? <p>Loading</p> : data.workExperience.workExperience.map((work, index) =>

                    <div className="flex items-center gap-10" key={index}>
                        <img className="w-20 rounded-my2" src={work.logoUrl} alt={work.logoUrl} />
                        <div className="flex flex-col gap-3 w-full">
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
                    </div>

                )}

            </div>

        </section>
    )


}