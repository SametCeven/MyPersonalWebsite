import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"


export default function Education() {
    const { data, loading, error, educationSectionRef } = useContext(GlobalContext)


    return (
        <section className="flex flex-col pt-15" ref={educationSectionRef}>

            <h1 className="title1">Education</h1>

            <div className="flex flex-col justify-between gap-10 text-xs">

                <div className="flex gap-20">
                    {loading ? <p>Loading</p> : data.education.schools.map((school, index) =>
                        <div className="flex flex-col gap-1 w-72" key={index}>
                            <span className="title2" key={school.degree}> {school.degree} </span>
                            <span key={school.school}> {school.school} </span>
                            <span key={school.department}> {school.department} </span>
                            <div>
                                <span key={school.startDate}> {school.startDate} </span>
                                <span> - </span>
                                <span key={school.endDate}> {school.endDate} </span>
                            </div>
                            <span> {school.description} </span>
                        </div>
                    )}
                </div>
                
                <div className="flex gap-20">
                    {loading ? <p>Loading</p> : data.education.others.map((other, index) =>
                        <div className="flex flex-col gap-1 w-72" key={index}>
                            <span className="title2" key={other.name}> {other.name} </span>
                            <div key={index}>
                                <span key={other.startDate}> {other.startDate} </span>
                                <span> - </span>
                                <span key={other.endDate}> {other.endDate} </span>
                            </div>
                            <span key={other.description}> {other.description} </span>
                        </div>
                    )}
                </div>


            </div>

        </section>
    )


}