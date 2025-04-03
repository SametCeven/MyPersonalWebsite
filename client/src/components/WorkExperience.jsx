import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"


export default function WorkExperience() {
    const { data, loading, error } = useContext(GlobalContext)


    return (
        <section className="initial">

            <h1 className="title1">Work Experience</h1>

            <div className="flex flex-wrap justify-between gap-10 text-xs">

                {loading ? <p>Loading</p> : data.workExperience.workExperience.map((work, index) =>

                    <div className="flex flex-col gap-5 w-full" key={index}>
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-1">
                                <span className="title2"> {work.title} </span>
                                <span className="title2"> {work.company} </span>
                                <div>
                                    <span> {work.startingDate} </span>
                                    <span> - </span>
                                    <span> {work.endDate} </span>
                                </div>
                            </div>
                        </div>
                        <ul className="">
                            {work.description.map((desc, index) =>
                                <li key={index}>{desc}</li>
                            )}
                        </ul>
                        <ul className="flex gap-5">
                            {work.tags.map((tag, index) =>
                                <li className="tag" key={index}>{tag}</li>
                            )}
                        </ul>
                    </div>

                )}

            </div>

        </section>
    )


}