import {Link} from "react-router-dom"

export default function Navbar(){

    return(
        <nav className="py-10 px-30 flex gap-5">
            <Link>About Me</Link>
            <Link>Skills</Link>
            <Link>Projects</Link>
            <Link>Work Experience</Link>
            <Link>Education</Link>
        </nav>
    )
}