import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"


export default function Profile() {
    const { data, loading, error } = useContext(GlobalContext)

    return (
        <div className="py-10">

            {loading ? <p>Loading...</p> :
                <div className="flex flex-col gap-5">
                    <span className="title1"> {data.profile.name} </span>
                    <span> {data.profile.basedIn} </span>
                    <div className="flex flex-col">
                        {data.profile.languages.map((language,index) =>
                            <span key={index}> {language}  </span>
                        )}
                    </div>
                    <div className="flex gap-5">
                        <img className="w-8" src={data.profile.emailLogo} alt={data.profile.email} />
                        <span> {data.profile.email}  </span>
                    </div>
                    <div>
                        <a href={data.profile.linkedinUrl} target="_blank">
                            <img className="w-8" src={data.profile.linkedinLogo} alt={data.profile.linkedinUrl} />
                        </a>
                    </div>
                    <div>
                        <a href={data.profile.githubUrl} target="_blank">
                            <img className="w-8" src={data.profile.githubLogo} alt={data.profile.githubUrl} />
                        </a>
                    </div>


                </div>
            }


        </div>
    )
}