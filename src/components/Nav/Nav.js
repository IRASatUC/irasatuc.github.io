import IRAS_LOGO from '../img/IRAS_LOGO_2.png';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import HamburgerPNG from "../img/Hamburger.png";
import { useDeviceSize, useScrollPosition } from "../../utils/WindowStates";

function NavButtons({windowWidth, hamburgerOpen}) {
    return (
        <div className="nav-Buttons w-full block no-hamburger:flex no-hamburger:items-center no-hamburger:w-auto">
            <div className="text-lg no-hamburger:flex-grow no-hamburger:text-xl xl:text-2xl">
                <Link to="/" className="nav-Button" tabIndex={(windowWidth <= 1042 && !hamburgerOpen)?-1:undefined}>
                    About
                </Link>
                {/*<Link to="/Opportunities" className="nav-Button" tabIndex={(windowWidth > 1042 && !hamburgerOpen)-1:undefined}>
                    Opportunities
                </Link>*/}
                <Link to="/News" className="nav-Button" tabIndex={(windowWidth <= 1042 && !hamburgerOpen)?-1:undefined}>
                    News
                </Link>
                <Link to="/People" className="nav-Button" tabIndex={(windowWidth <= 1042 && !hamburgerOpen)?-1:undefined}>
                    People
                </Link>
                <Link to="/CurrentProjects" className="nav-Button" tabIndex={(windowWidth <= 1042 && !hamburgerOpen)?-1:undefined}>
                    Current Projects
                </Link>
                <Link to="/PriorProject" className="nav-Button" tabIndex={(windowWidth <= 1042 && !hamburgerOpen)?-1:undefined}>
                    Prior Projects
                </Link>
                <Link to="/Publications" className="nav-Publication" tabIndex={(windowWidth <= 1042 && !hamburgerOpen)?-1:undefined}>
                    Publications
                </Link>
            </div>
        </div>
    )
}

export default function Nav() {
    const windowWidth = useDeviceSize()[0];
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const scrollPosition = useScrollPosition();

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
                            <button className="h-[50px] z-10" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
                                <img alt="Hamburger button" width="50px" height="auto" src={HamburgerPNG} onClick={() => setHamburgerOpen(!hamburgerOpen)} />
                            </button>
                            <div className={"duration-[0.8s] ease-in-out w-full overflow-hidden z-10 " + (hamburgerOpen?"max-h-[272px]":"max-h-[0px]")}>
                                <NavButtons windowWidth={windowWidth} hamburgerOpen={hamburgerOpen} />
                            </div>
                        </> :
                        <NavButtons windowWidth={windowWidth} hamburgerOpen={hamburgerOpen} />
                    }
                </nav>
                
                { windowWidth <= 1042 &&
                    <div className={"bg-black fixed top-0 left-0 w-[1000px] h-[1000px] z-[5] transition-opacity duration-[0.3s] " + (hamburgerOpen?"opacity-80":"opacity-0 pointer-events-none")} onClick={() => setHamburgerOpen(!hamburgerOpen)}></div>
                }
            </div>
            <div className="h-[105px]"></div>
            <div className={"text-white rounded-md font-bold fixed w-12 h-12 flex items-center justify-center bottom-5 right-5 z-50 cursor-pointer bg-base-blue transition-opacity duration-[0.3s] ease-in-out " + ((scrollPosition > 300)?"opacity-80":"opacity-0 pointer-events-none")} onClick={()=>{window.scrollTo({top: 0, behavior: "smooth"})}}>
                <p>Top</p>
            </div>
            <Outlet />
        </>
    )
}
