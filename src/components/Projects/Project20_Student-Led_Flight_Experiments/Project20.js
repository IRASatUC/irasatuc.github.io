import ProjectUI from '../../../reusables/ProjectUI/ProjectUI';
import Picture1 from './Picture1.jpg';
import Picture2 from './Picture2.jpg'
import Picture3 from './Picture3.jpg'
import Picture4 from './Picture4.jpg'
import Picture5 from './Picture5.jpg'

import video1 from './video1.mp4';
import video2 from './video2.mp4';

function Project20_Publications() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', width: "100%" }}>
            <ul>
                <li>
                    Ma, O. and Horan, S., “NMSU Nanosatellite with robotics capabilities”,
                    <em> Proc. of 8th Intl. symp. on Artificial Intelligence, Robotics and Automation in Space (i-SAIRAS’05)</em>, Munich, Germany, Sept. 5-9, 2005, pp. 145-152.
                </li>
                <li>
                    Bruggemann, J., Ferrel, I., Martinez, G., Xie, P., and Ma, O., "Zero-G experimental validation of a robotics-based inertia identification algorithm",
                    <em> Space Missions and Technologies Conference</em>, SPIE Proc. Vol. 7691, 2010, <a href="https://doi.org/10.1117/12.849772" target="_blank" rel="noopener noreferrer">DOI: 10.1117/12.849772</a>.
                </li>
                <li>
                    Martinez G., Inzunza-Ibarra M., Ferrel I., Herrera B., and Ma O., “Development of a Suborbital Flight Experiment for Validating A Satellite Inertia Identification Method”,
                    2011, <em>SPIE 8044</em>, 80440H 2011; <a href="https://doi.org/10.1117/12.887253" target="_blank" rel="noopener noreferrer">DOI: 10.1117/12.887253</a>.
                </li>
            </ul>
        </div>
    )
}

export default function Project20() {
    return (
        <ProjectUI
            Background={video1}
            projectTitle="Student-Led Flight Experiments"

            projectImage={[{
                title: "",
                src: Picture1,
            },{
                title: "",
                src: Picture2,
            },{
                title: "",
                src: Picture3,
            },{
                title: "",
                src: Picture4,
            },{
                title: "",
                src: Picture5,
            }]}

            projectVideo={[{
                title:"",
                src: video2,
            }]}
            publications={Project20_Publications}
        />
    )
}
