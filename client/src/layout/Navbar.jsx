import {Link} from "react-router-dom"

export default function Navbar(){

    return(
        <nav className="py-10 flex flex-col gap-5">
            <Link>Skills</Link>
            <Link>Projects</Link>
            <Link>Work Experience</Link>
            <Link>Education</Link>
        </nav>
    )
}