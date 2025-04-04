import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"


export default function Education() {
    const { data, loading, error } = useContext(GlobalContext)


    return (
        <section className="initial">

            <h1 className="title1">Education</h1>

            <div className="flex flex-col justify-between gap-10 text-xs">

                <div className="flex gap-20">
                    {loading ? <p>Loading</p> : data.education.schools.map((school, index) =>
                        <div className="flex flex-col gap-1 w-72">
                            <span className="title2"> {school.degree} </span>
                            <span className=""> {school.school} </span>
                            <span> {school.department} </span>
                            <div>
                                <span> {school.startDate} </span>
                                <span> - </span>
                                <span> {school.endDate} </span>
                            </div>
                            <span> {school.description} </span>
                        </div>
                    )}
                </div>
                
                <div className="flex gap-20">
                    {loading ? <p>Loading</p> : data.education.others.map((other, index) =>
                        <div className="flex flex-col gap-1 w-72">
                            <span className="title2"> {other.name} </span>
                            <div>
                                <span> {other.startDate} </span>
                                <span> - </span>
                                <span> {other.endDate} </span>
                            </div>
                            <span > {other.description} </span>
                        </div>
                    )}
                </div>


            </div>

        </section>
    )


}