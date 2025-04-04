import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export default function Profile() {
    const { data, loading, error } = useContext(GlobalContext)

    return (
        <div className="py-10">

            {loading ? <p>Loading...</p> :
                <div className="flex flex-col gap-5 text-xs w-60">
                    <span className="title1 transition-all duration-200 hover:scale-120"> {data.profile.name} </span>
                    <div className="flex items-center gap-5">
                        <FontAwesomeIcon className="text-3xl text-c4" icon={faCode} />
                        <span className="">Full-stack Developer</span>
                    </div>
                    
                    <div className="flex items-center gap-5">
                        <FontAwesomeIcon className="text-3xl text-c4" icon={faLocationDot} />
                        <span> {data.profile.basedIn} </span>
                    </div>
                    <div className="flex items-center gap-5">
                        <FontAwesomeIcon className="text-3xl text-c4" icon={faLanguage} />
                        <div className="flex gap-5">
                            {data.profile.languages.map((language, index) =>
                                <span key={index}> {language}  </span>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <a href={`mailto:${data.profile.email}`}>
                            <FontAwesomeIcon className="text-3xl text-c4" icon={faEnvelope} />
                        </a>
                        <span className="pl-5"> {data.profile.email}  </span>
                    </div>
                    <div className="flex gap-5 text-3xl">
                        <div className="logo">
                            <a href={data.profile.linkedinUrl} target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                        <div className="logo">
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