import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Link } from "react-router"

export default function Profile() {
    const { data, loading, error } = useContext(GlobalContext)

    return (
        <div className="py-10">

            {loading ? <p>Loading...</p> :
                <div className="flex flex-col gap-5 text-xs">
                    <span className="title1"> {data.profile.name} </span>
                    <span> {data.profile.basedIn} </span>
                    <div className="flex flex-col">
                        {data.profile.languages.map((language, index) =>
                            <span key={index}> {language}  </span>
                        )}
                    </div>
                    <div className="flex gap-5 items-center">
                        <FontAwesomeIcon className="text-3xl" icon={faEnvelope} />
                        <span> {data.profile.email}  </span>
                    </div>
                    <div className="flex gap-5 text-3xl">
                        <div>
                            <a href={data.profile.linkedinUrl} target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                        <div>
                            <a href={data.profile.githubUrl} target="_blank">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>


                </div>
            }


        </div>
    )
}