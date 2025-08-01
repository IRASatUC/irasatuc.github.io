import IRAS_LOGO from '../img/IRAS_LOGO_2.png';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import HamburgerPNG from "../img/Hamburger.png";
import { useDeviceSize } from "../../utils/WindowStates";

const NavButtons = (
    <div className="nav-Buttons w-full block no-hamburger:flex no-hamburger:items-center no-hamburger:w-auto">
        <div className="text-lg no-hamburger:flex-grow no-hamburger:text-xl xl:text-2xl">
            <Link to="/" className="nav-Button">
                About
            </Link>
            {/*<Link to="/Opportunities" className="nav-Button">
                Opportunities
            </Link>*/}
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
            <Link to="/Publications" className="nav-Publication">
                Publications
            </Link>
        </div>
    </div>
)

export default function Nav() {
    const windowWidth = useDeviceSize()[0];
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    return (
        <>
            <div className="Nav">
                <nav className="flex items-center justify-between flex-wrap w-full bg-base-blue p-6 fixed z-10">

                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <Link to='/'><img className="w-[200px] h-auto invert" src={IRAS_LOGO} alt=""></img></Link>
                    </div>

                    {
                        windowWidth <= 1042 ?
                        <>
                            <button className="h-[50px]" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
                                <img alt="Hamburger button" width="50px" height="auto" src={HamburgerPNG} onClick={() => setHamburgerOpen(!hamburgerOpen)} />
                            </button>
                            <div className={"duration-[0.8s] ease-in-out w-full overflow-hidden " + (hamburgerOpen?"max-h-[272px]":"max-h-[0px]")}>
                                { NavButtons }
                            </div>
                        </> :
                        <>{ NavButtons }</>
                    }
                </nav>
            </div>
            <div className="h-[108px]"></div>
            <Outlet />
        </>
    )
}
