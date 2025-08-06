import {useEffect} from 'react';

import "./About.css";
import { About_descriptions } from "../../contents/About_descriptions/About_descriptions";
import HighBayJPG from "../img/DF HighBay room 1.jpg";
import SpaceRoboticsJPG from "../img/space_robotics_2023.jpg";

function textSwap(newText,id) {
    const description = document.getElementById(id);
    description.style.animation='fadeIn 1s ease-in-out forwards';
    description.classList.add("text-xl");
    description.classList.remove("text-3xl");
    description.classList.add("max-[932px]:text-sm");
    description.classList.remove("max-[932px]:text-xl");
    description.innerHTML = newText;
}

export default function About() {
    useEffect(() => {
            document.getElementById('root').style.background = 'linear-gradient(to bottom, var(--color-base-blue) 50%, white 100%)';
            return () => {
                document.getElementById('root').style.background = 'initial';
            };
        }
    );

    return (
        <div className="bg-base-blue">
            <div className='iras-lab-about-section-1 aspect-[1.49] h-auto min-[933px]:aspect-auto min-[933px]:h-[700px] bg-cover'>

                <div id='Home-About-Container' className='flex items-center justify-center w-full'>
                    <p id='About-text' className='flex justify-center rounded-[5px] mt-[50px] text-white text-center text-3xl font-bold p-5 w-1/2 min-w-[460px] max-h-[50vw] overflow-y-scroll max-[932px]:text-xl max-[932px]:min-w-[80vw]'>
                        {About_descriptions[1]}
                    </p>
                </div>

                <div className='flex items-center justify-center mt-5 w-full'>
                    <button onClick={() => {textSwap(About_descriptions[0],"About-text"); [...document.getElementsByClassName("animate-bounce")].forEach((e) => {e.style.animation='fadeIn 1s ease-in-out reverse, bounce 1s infinite'; e.style.opacity="0"})}}
                        className="hover:text-blue-500 text-white bg-base-blue font-bold py-2 px-4 rounded animate-bounce">
                        Learn More
                    </button>
                </div>

            </div>
            <div className="flex flex-col items-center gap-10 mt-6">
                <div className="aspect-[calc(7/6)] w-[90%] no-hamburger:w-[700px] overflow-hidden"><img alt="High Bay room 1" src={HighBayJPG} /></div>
                <div className="aspect-[calc(7/6)] w-[90%] no-hamburger:w-[700px] overflow-hidden mb-5"><img alt="Space Robotics 2023" src={SpaceRoboticsJPG} /></div>
            </div>

            <div id="About_contact_section" className='flex items-end justify-center bottom-0 pb-[10px] sticky h-full w-full bg-base-blue'>
                <div id='transition-contact-section' className="w-full absolute h-[100px] -top-[100px] no-hamburger:h-[150px] no-hamburger:-top-[150px] pointer-events-none"></div>

                <div className='w-3/4'>
                    <p className='flex items-center justify-start flex-wrap text-white text-xl max-[1000px]:text-sm font-bold w-full'>
                        Lab Director : Dr. Ou Ma, maou@ucmail.uc.edu, (513) 556-3747
                    </p>
                    <p className='mt-5 flex items-center justify-start flex-wrap text-white text-xl max-[1000px]:text-sm font-bold w-full'>
                        Lab Manager : Brian Van Fossen, vanfosbn@ucmail.uc.edu, (513) 556-3684
                    </p>
                </div>
            </div>
            <div className='iras-lab-about-section-end bg-white h-[20vh] bg-contain bg-no-repeat bg-bottom'></div>
        </div>
    )
}
