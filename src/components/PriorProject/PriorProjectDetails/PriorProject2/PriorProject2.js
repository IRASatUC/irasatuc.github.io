import './PriorProject2.css';

import rgb_lab from './rgb_lab.jpg';
export default function PriorProject2() {
    return (
        <div className='PriorProject2'>
            
            <img src={rgb_lab} id="myImage" alt=""></img>
            <div className="content" >
                <h1 style={{ fontSize: "30px" }}>Reduced-Gravity and Biomechnics (RGB) Lab at NMSU</h1>
                <button id="myBtn" onClick={() => console.log("Hi")}>Explore</button>
            </div>
            
        </div>
    )
}