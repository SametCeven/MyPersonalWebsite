import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"


export default function Education() {
    const { data, loading, error, educationSectionRef } = useContext(GlobalContext)


    return (
        <section className="flex flex-col pt-15" ref={educationSectionRef} id="education">

            <h1 className="title1">Education</h1>

            <div className="flex flex-col gap-5">

                <div className="flex max-xl:flex-col max-xl:gap-5">
                    {loading ? <p>Loading</p> : data.education.schools.map((school, index) =>
                        <div className="flex items-center gap-5" key={index}>
                            <div>
                                <img className="w-20 rounded-my2" src={school.logoUrl} alt={school.school} />
                            </div>
                            <div className="flex flex-col w-72">
                                <span className="title2" key={school.degree}> {school.degree} </span>
                                <span key={school.school}> {school.school} </span>
                                <span key={school.department}> {school.department} </span>
                                <div>
                                    <span key={school.startDate}> {school.startDate} </span>
                                    <span> - </span>
                                    <span key={school.endDate}> {school.endDate} </span>
                                </div>
                                <span className="text-xs"> {school.description} </span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex">
                    {loading ? <p>Loading</p> : data.education.others.map((other, index) =>
                        <div className="flex items-center gap-5" key={index}>
                            <div>
                                <img className="w-20 rounded-my2" src={other.logoUrl} alt={other.name} />
                            </div>
                            <div className="flex flex-col w-72">
                                <span className="title2" key={other.name}> {other.name} </span>
                                <div key={index}>
                                    <span key={other.startDate}> {other.startDate} </span>
                                    <span> - </span>
                                    <span key={other.endDate}> {other.endDate} </span>
                                </div>
                                <span className="text-xs" key={other.description}> {other.description} </span>
                            </div>
                        </div>
                    )}
                </div>


            </div>

        </section>
    )


}