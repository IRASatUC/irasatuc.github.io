import Aircraft_Scanning from "./Aircraft_Scanning.jpg"
import Architecture from './Architecture.jpg'
import Prior_Project8_video1 from './Prior_Project8_video1.mp4';
import ProjectUI from '../../../reusables/ProjectUI/ProjectUI';
const headerStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '20px'
};
function Project8_Description() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', width: "100%" }}>
            <h2 style={headerStyle}>Description</h2>
            <p>This project aims to develop an one-stop solution of automated 3D scanning of an aircraft by applying the latest robotics, artificial intelligence, and sensing technologies. A robotic system, consisting of an unmanned aerial vehicle (UAV) with a RGB-D camera, an unmanned ground vehicle (UGV) and a manipulator equipped with a high-precision and close-range 3D scanner, is used to perform automated scanning for acquiring 3D model of an aircraft by following an optimal scanning trajectory computed by using reinforcement learning technique: Monte Carlo Tree Search. The resulting 3D model can be analyzed for identifying widespread defects, such as dents and cracks, on the surface of aircraft fuselage, wings, and other components. Such a solution makes the scanning process much more efficient and of higher quality. Further, the solution also removes the tedious, boring, and sometimes even risky human labor from the scanning work.</p>

            <h2 style={headerStyle}>Methodology</h2>
            <p>A two-phase scanning method with using a high-precision indoor positioning system is proposed to meet the requirement of high accuracy for the aircraft scanning. The first phase of scanning is to reconstruct a coarse aircraft model with a consumer-grade RGB-D camera and the second phase of scanning is to reconstruct a precision aircraft model with a high-precision 3D laser scanner based on the coarse model acquired in the first phase.</p>

        </div>
    )
}
const Project8_publications = () => {
    return (
        <div style={{ padding: '20px' }}>
            <ul style={{ listStyleType: "disc" }}>
                <li>
                    Yufeng Sun, Lin Zhang, and Ou Ma. “Robotics-Assisted 3D Scanning of Aircraft.” AIAA AVIATION 2020 FORUM. July 2020.
                </li>
                <li>
                    Yufeng Sun and Ou Ma. “Automating Aircraft Exterior Inspection with Robotics and Machine Learning Technologies” ASME 2020 Intl. Mech. Eng Congress and Exposition (IMECE202), Nov. 16-19, 2020, Portland, OR.
                </li>
                <li>
                    Sun, Yufeng, and Ma Ou. “Automating Aircraft Scanning for Inspection or 3D Model Creation with a UAV and Optimal Path Planning.” Drones 6.4 (2022): 87.
                </li>
                <li>
                    Sun, Y. and Ma, O.; “Drone-based Automated Exterior Inspection of an Aircraft using Reinforcement Learning Technique”, AIAA 2023 SciTech, National Harbor, MD, Jan 23-27, 2023.
                </li>
            </ul>
        </div>
    );
}

export default function Project8() {
    return (
        <ProjectUI
            BackgroundImage={Aircraft_Scanning}
            projectTitle="AI and Robotics Assisted 3D Scanning for Inspection or Rapid and Accurate Reverse Engineering"
            projectTeaser=""
            projectDescription={Project8_Description}
            projectImage={[{
                title: "",
                src: Architecture
            }]}
            projectVideo={[{
                title: "Simulation",
                src: Prior_Project8_video1
            }]}
            publications={Project8_publications}

        />
    )
}