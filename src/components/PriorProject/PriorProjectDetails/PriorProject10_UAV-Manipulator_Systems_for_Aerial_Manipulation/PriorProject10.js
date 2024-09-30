import applications from "./applications.jpg"
import uav_arm from './uav_arm.jpg'
import ProjectUI from '../../../../reusables/ProjectUI/ProjectUI';
const headerStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '20px'
};
function PriorProject10_Description() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', width: "100%" }}>
            <h1 style={{...headerStyle,fontSize:"30px"}}>UAV-Manipulator Systems for Aerial Manipulation</h1>
            <section>
                <h2 style={headerStyle}>Research Problems</h2>
                <ul style={{listStyleType:"disc"}}>
                    <li>Coupling dynamics between UAV and arm</li>
                    <li>Contact dynamics between arms and environment</li>
                    <li>Coordinated control of the UAV and arms</li>
                    <li>Lightweight arm design and extra power demanding</li>
                    <li>Challenges on human operation</li>
                    <li>Challenge on safe and fully controlled testing</li>
                    <li>Uncertainties (e.g., wind, rain, dust, parts failures)</li>
                </ul>
            </section>
            <section>
                <h2 style={headerStyle}>Potential Applications</h2>
                <ul style={{listStyleType:"disc"}}>
                    <li>Inspects and fixes large or tall structures</li>
                    <li>Perches on various spots like a bird</li>
                    <li>Picks and places a payload</li>
                    <li>Performs dexterous aerial manipulations</li>
                    <li>Rescue operations after natural disasters</li>
                    <li>Assembly and construction</li>
                    <li>3D printing large structures from the air</li>
                </ul>
            </section>

        </div>
    )
}

export default function PriorProject10() {
    return (
        <ProjectUI
            projectTitle="Robotics Assisted 3D Scanning of Aircraft for Reverse Engineering and Inspection"
            projectTeaser=""
            projectDescription={PriorProject10_Description}
            projectImage={[{
                title: "",
                src: applications
            }, {
                title: "",
                src: uav_arm
            }]}

        />
    )
}