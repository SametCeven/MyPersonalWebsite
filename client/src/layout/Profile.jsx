import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import SliderCheckbox from "../components/SliderCheckbox"

export default function Profile() {
    const { data, loading, error, darkMode,setDarkMode } = useContext(GlobalContext)

    function handleDarkMode() {
        if (darkMode === true) setDarkMode(false)
        else setDarkMode(true)
    }

    return (
        <div className="py-10">

            {loading ? <p>Loading...</p> :
                <div className="flex flex-col gap-5 w-60 max-xl:items-center max-xl:w-screen">
                    <div>
                        <span className="title1 transition-all duration-200 hover:scale-105"> {data.profile.name} </span>
                    </div>

                    <div className="flex flex-col gap-5 max-xl:flex-row max-xl:justify-center max-xl:items-center max-xl:flex-wrap">
                        <div className="flex items-center gap-5 max-lg:gap-1">
                            <FontAwesomeIcon className={`${darkMode ? "logo-dm" : "logo"}`} icon={faCode} />
                            <span className="">Full-stack Developer</span>
                        </div>
                        <div className="flex items-center gap-5 max-lg:gap-1">
                            <FontAwesomeIcon className={`${darkMode ? "logo-dm" : "logo"}`} icon={faLocationDot} />
                            <span> {data.profile.basedIn} </span>
                        </div>
                        <div className="flex items-center gap-5 max-lg:gap-1">
                            <FontAwesomeIcon className={`${darkMode ? "logo-dm" : "logo"}`} icon={faLanguage} />
                            <div className="flex gap-5 max-lg:gap-1">
                                {data.profile.languages.map((language, index) =>
                                    <span key={index}> {language}  </span>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <a href={`mailto:${data.profile.email}`}>
                                <FontAwesomeIcon className={`${darkMode ? "logo-dm" : "logo"}`} icon={faEnvelope} />
                            </a>
                            <span className="pl-5 max-lg:pl-1"> {data.profile.email}  </span>
                        </div>
                        <div className="flex gap-5 text-3xl">
                            <div className={`${darkMode ? "logo-hover-dm" : "logo-hover"}`}>
                                <a href={data.profile.linkedinUrl} target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            <div className={`${darkMode ? "logo-hover-dm" : "logo-hover"}`}>
                                <a href={data.profile.githubUrl} target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>

                        <br></br>

                        <SliderCheckbox value={darkMode} handleValue={handleDarkMode} text="Dark Mode"></SliderCheckbox>

                    </div>

                </div>
            }


        </div>
    )
}