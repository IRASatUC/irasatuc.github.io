import ProjectUI from '../../../reusables/ProjectUI/ProjectUI';
import vehicle_simulator_environment from './vehicle-simulator-environment.jpg'
import Prior_Project11_video1 from './Prior_Project11_video1.mp4';
import Prior_Project11_video2 from './Prior_Project11_video2.mp4';

function Project11_Description() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', width: "100%" }}>
            <h1 className="ProjectUI_header" style={{fontSize:"30px"}}>Physical Simulation of a Human-Driving Vehicle in Lab Environment</h1>
            <h2 className="ProjectUI_header">Objective</h2>
            <p>Develop technology to physically simulate a human driving a manned vehicle which is represented by an unmanned vehicle in a scaled urban environment where both “manned vehicles” and autonomous vehicles are operating in the shared space. The technology can be used to support research in the areas of trusted autonomy, human-autonomy collaboration, and autonomous driving.</p>

            <h2 className="ProjectUI_header">Motivation</h2>
            <p>With the fast advancement of robotics and autonomy technologies, heterogeneous autonomous robotic vehicles (e.g., UGVs or driverless vehicles) are expected to work along with manned vehicles in human-autonomy shared environments. Hence, the operation of those autonomous vehicles must co-operate and ensure safety in the presence of manned vehicles. However, it is very risky and also costly to test autonomous vehicles operating in a real urban environment where many manned vehicles are operating. Therefore, we need a technology and facility which ensures safe testing of multiple autonomous vehicles operating with human-driven vehicles in a shared urban environment. The technology developed on this project will address this need.</p>

            <h2 className="ProjectUI_header">Technology HighLights</h2>
            <ul style={{listStyleType:"disc"}}>
                <li>Human-machine interface – a vehicle driving simulator to allow a human driver to participate.</li>
                <li>Render live video imaging from a vehicle-mounted camera on the simulator’s screens.</li>
                <li>Operate the “manned vehicle” by a human driver through a realistic driving simulator – a true human-in-the-loop and hardware-in-the-loop simulation system.</li>
                <li>All the software is ROS based, making it easy to transfer and further develop.</li>
            </ul>
        </div>
    )
}

export default function Project11() {
    return (
        <ProjectUI
            projectTitle="Robotics Assisted 3D Scanning of Aircraft for Reverse Engineering and Inspection"
            projectTeaser=""
            projectDescription={Project11_Description}

            projectImage={[{
                title: "",
                src: vehicle_simulator_environment,
            }]}

            projectVideo={[{
                title: () => {
                    return(
                        <div style={{color:"white"}}>
                            <h1 className="ProjectUI_header">A similar product</h1>
                            <p>The technology is, in part, similar to the Sony’s Mario car game:</p>
                        </div>
                    )
                },
                src: Prior_Project11_video1,
            },{
                title: () => {
                    return(
                        <div style={{color:"white"}}>
                            <h1 className="ProjectUI_header">Difference from Sony’s Mario car game</h1>
                            <p>Our technology is more realistic than Mario in terms of addressing human factors and performance because Mario uses a hand-held controller to “drive” the vehicle but our solution uses a real driving simulator to drive the vehicle and hence, in our case the driver will have realistic driving experience (with the steering wheel, brake pedal, gas pedal, gear shift, instrument panel, driving seat, etc.).</p>
                            <h1 className="ProjectUI_header">Demonstration</h1>

                        </div>
                    )
                },
                src: Prior_Project11_video2,
            }]}
        />
    )
}
