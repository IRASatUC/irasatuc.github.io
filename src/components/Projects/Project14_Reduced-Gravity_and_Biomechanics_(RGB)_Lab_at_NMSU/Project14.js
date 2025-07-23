import ProjectUI from '../../../reusables/ProjectUI/ProjectUI';
import rgb_lab from './rgb_lab.jpg';
import Picture11JPG from "./Picture11.jpg";
import Picture12JPG from "./Picture12.jpg";
import Picture13JPG from "./Picture13.jpg";
import Media1MP4 from "./Media1.mp4";

const Project14Description = () => {
    return (
        <div>
            <h1 className="ProjectUI_header">Applications</h1>
            <ul className="list-disc">
                <li>Scientific study of space biomechanics </li>
                <li>Astronauts training</li>
                <li>Astronaut tasks evaluation</li>
                <li>Satellite tumbling test</li>
                <li>Space education</li>
            </ul>
            <h1 className="ProjectUI_header">Advantages</h1>
            <ul className="list-disc">
                <li>Simulate any gravity level from 0 to 1g</li>
                <li>Multi-DOF mechanism and exoskeletons</li>
                <li>Reliable passive technology</li>
                <li>Ambient lab environment</li>
                <li>Low cost</li>
            </ul>
        </div>
    )
}

const Project14Publication = () => {
    return (
        <ul className="list-disc">
            <li>Xiu, W., Ruble, K. and Ma O., “A Reduced-Gravity Simulator for Physically Simulating Human Walking in Microgravity or Reduced-Gravity Environment”, Proc. of 2014 Intl. Conf. on Robotics and Auto. (ICRA 2014), Hong Kong, China, May 31-June 5, 2014.</li>
            <li>Paz, R.A., Barajas, J.C., Ma, O., “Autobalancing Control for a Reduced Gravity Simulator”, Proc. 2013 IEEE/ASME Intl. Conference on Advanced Intelligent Mechatronics (AIM 2013), Wollongong, Australia, July 9-12, 2013.</li>
            <li>Ma, O., Lu, Q., McAvoy, J., and Ruble, K., “Concept study of a passive reduced-gravity simulator for training astronauts”, Proc. ASME 2010 Intl. Design Eng. Tech. Conf. (IDETC 2010), Aug.15-18, 2010, Montreal, Paper #DETC2010-29079.</li>
        </ul>
    )
}

export default function Project14() {
    return (
        <ProjectUI
            projectTitle="Reduced-Gravity and Biomechnics (RGB) Lab at NMSU"
            BackgroundImage={rgb_lab}
            projectDescription={Project14Description}
            projectImage={[
                {
                    title: "",
                    src: Picture11JPG,
                },
                {
                    title: "",
                    src: Picture12JPG,
                },
                {
                    title: "",
                    src: Picture13JPG,
                },
            ]}
            projectVideo={[
                {
                    title: "",
                    src: Media1MP4,
                },
            ]}
            publications={Project14Publication}
        />
    )
}
