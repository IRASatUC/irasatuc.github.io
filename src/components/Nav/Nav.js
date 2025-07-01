import './Nav.css';
import IRAS_LOGO from '../img/IRAS_LOGO_2.png';
import { Outlet, Link } from "react-router-dom";

export default function Nav(){
    return(
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-[#37425B] p-6">

                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link to='/'><img className="nav-Logo" src={IRAS_LOGO} alt=""></img></Link>
                </div>

                <div className="w-full block lg:flex lg:items-center lg:w-auto">
                    <div className="text-lg lg:flex-grow lg:text-xl xl:text-2xl">
                        <Link to="/" className="nav-Button">
                            About
                        </Link>
                        <Link to="/Oppoturnities" className="nav-Button">
                            Oppoturnities
                        </Link>
                        <Link to="/News" className="nav-Button">
                            News
                        </Link>
                        <Link to="/People" className="nav-Button">
                            People
                        </Link>
                        <Link to="/CurrentProjects" className="nav-Button">
                            Current Projects
                        </Link>
                        <Link to="/PriorProject" className="nav-Button">
                            Prior Projects
                        </Link>
                        <Link to="/Publication" className="nav-Publication">
                            Publication
                        </Link>
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>
    )
}
