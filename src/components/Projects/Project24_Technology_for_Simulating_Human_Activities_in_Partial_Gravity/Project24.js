import ProjectUI from '../../../reusables/ProjectUI/ProjectUI';
import lowGravity from "./Playing in Low Gravity.mp4"

export default function Project24() {
    return (
        <ProjectUI
            Background={lowGravity}
            projectTitle="Technology for Simulating Human Activities in Partial Gravity"
            projectTeaser={<ul>
                    <li>Simulate any gravity level from 0 to 1g</li>
                    <li>Multi-DOF mechanism and exoskeletons</li>
                    <li>Reliable passive technology</li>
                    <li>Ambient lab environment</li>
                    <li>Low cost</li>
                </ul>}
            publications={()=>{return (<ol style={{listStyle:"number"}}>
                        <li>Lu Q.; Ortega C. and Ma O.; “Passive gravity compensation mechanisms: technologies and applications”, Recent Patents on Eng., Vol.5, 2011.</li>
                        <li>Paz, R.A., Barajas, J.C., Ma, O., “Autobalancing Control for a Reduced Gravity Simulator”, 2013 IEEE/ASME Intl. Conf. on Advanced Intel. Mech. (AIM), July 2013.</li>
                        <li>Xiu, W., Ruble, K. and Ma O., “A Reduced-Gravity Simulator for Physically Simulating Human Walking in Microgravity or Reduced-Gravity Environment”, 2014 Intl. Conf. on Robotics and Auto. (ICRA), June 2014.</li>
                    </ol>)}}
        />
    )
}
