import "./About.css";
import { About_descriptions } from "../../contents/About_descriptions/About_descriptions";
function textSwap(newText,id){
    document.getElementById(id).style.animation='fadeIn 5s ease-in-out forwards';
    
    document.getElementById(id).innerHTML = newText;
}
export default function About() {
    return (
        <div className="about">
            <div className='iras-lab-about-section-1'>

                <div id='Home-About-Container' className='flex items-center justify-center	 w-full'>
                    <p id='About-text' className='flex items-center justify-center flex-wrap text-white text-center text-3xl	font-bold p-5 w-1/2'>
                        {About_descriptions[1]}
                    </p>
                    
                </div>
                <div className='flex items-center justify-center mt-5 w-full'>
                    <button onClick={()=>{
                        textSwap(About_descriptions[0],"About-text")
                    }} class="bg-[#37425B] hover:text-blue-500 text-white font-bold py-2 px-4 rounded animate-bounce">
                        Learn More
                    </button>
                </div>

            </div>
            <div className='transition'></div>
            <div className='iras-lab-about-section-2'>

            </div>

            <div className='iras-lab-about-section-3'>

            </div>
            <div id="About_contact_section" className='bg-[#37425B] flex items-end justify-center	h-full w-full'>
                    <div id='transition-contact-section' className="w-full"></div>

                    <div className='w-3/4'>
                        <p className='flex items-center justify-start flex-wrap text-white  text-xl	font-bold	w-full'>
                            Lab Director : Dr. Ou Ma, maou@ucmail.uc.edu, (513) 556-3747

                        </p>
                        <p className='mt-5 flex items-center justify-start flex-wrap text-white  text-xl	font-bold	w-full'>
                            Lab Manager : Conrad Kent, kentcm@ucmail.uc.edu, (513) 556-3747
                        </p>
                        
                    </div>
                </div>
            <div className='iras-lab-about-section-end'>
                <div className='transition-end'></div>

            </div>
        </div>
    )
}