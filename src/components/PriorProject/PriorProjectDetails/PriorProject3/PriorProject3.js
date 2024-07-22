import './PriorProject3.css';
import lowGravity from "./Playing in Low Gravity.mp4"
export default function PriorProject3() {
    return (
        <div className='PriorProject3'>
            <video autoPlay muted loop id="myVideo">
                <source src={lowGravity} type="video/mp4"></source>
            </video>
            <div className="content" >
                <h1 style={{ fontSize: "30px" }}>Technology for Simulating Human Activities in Partial Gravity</h1>
                <p>
                    <ul>
                        <li>Simulate any gravity level from 0 to 1g</li>
                        <li>Multi-DOF mechanism and exoskeletons</li>
                        <li>Reliable passive technology</li>
                        <li>Ambient lab environment</li>
                        <li>Low cost</li>
                    </ul>
                </p>
                <button id="myBtn" onClick={() => console.log("Hi")}>Explore</button>
            </div>
            <div className='PriorProject3_publication'>
                <h1 style={{ display: 'flex', justifyContent: "center", width: "100%", fontSize: "30px", fontWeight: "bold" }}>Publications</h1>
                <div style={{ display: 'flex', justifyContent: "center", width: "100%" }} >
                    <ol style={{listStyle:"number"}}>
                        <li>Lu Q.; Ortega C. and Ma O.; “Passive gravity compensation mechanisms: technologies and applications”, Recent Patents on Eng., Vol.5, 2011.</li>
                        <li>Paz, R.A., Barajas, J.C., Ma, O., “Autobalancing Control for a Reduced Gravity Simulator”, 2013 IEEE/ASME Intl. Conf. on Advanced Intel. Mech. (AIM), July 2013.</li>
                        <li>Xiu, W., Ruble, K. and Ma O., “A Reduced-Gravity Simulator for Physically Simulating Human Walking in Microgravity or Reduced-Gravity Environment”, 2014 Intl. Conf. on Robotics and Auto. (ICRA), June 2014.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}