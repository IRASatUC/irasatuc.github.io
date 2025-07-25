import ProjectUI from '../../../reusables/ProjectUI/ProjectUI';
import Prior_Project9_video1 from './Prior_Project9_video1.mp4';
import Prior_Project9_video2 from './Prior_Project9_video2.mp4';
import robot from './robot.png';

function Project9_Description() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', width: "100%" }}>
            <h2 className="ProjectUI_header">Description</h2>
            <p>This project aims to develop an autonomous service robot working in indoor environments (such as schools, office buildings, and hospitals) and providing services such as material transportation, room cleaning, disinfection and many other tasks. The significant challenges include: 1) self-closing door opening: the robot must be able to autonomously open doors and traverse the doorways so that it can extend its working area to different rooms without human assistance, 2) self-charging using standard wall outlets: the robot must be able to autonomously charge its battery using standard wall outlets which are widely available in public indoor environments, so that it can extend its working time without human assistance. Both are complex tasks which can be divided into three subtasks: 1) object detection, 2) long-range approaching, and 3) close-range manipulation. Instead of using an expensive robotic arm, we are developing a cost-effective device which can be attached to a wheeled robot along with cameras and force sensors for the door-opening task.</p>
            <img src={robot} alt="" style={{width:"70%",marginLeft:"auto",marginRight:"auto",padding:"20px"}}></img>

            <h2 className="ProjectUI_header">Methodology</h2>
            <p>We designed a cost-effective 2-DOF device for performing both door-opening and self-charging tasks, the device contain a motor-driven 2-DOF end-effector for operating door handle and inserting plug into wall outlets, a sidebar for pulling self-closing door open, two PI cameras and an RGBD camera for detecting and estimating the target object (door handles and wall outlets), and two 3-axis loadcells for detecting contact forces. For object detection task, we collected a dataset containing images of doors, door handles, wall outlets and trained a YOLO v5 model with this dataset, which can be deployed to the robot for real-time detection. For long-range approaching task, we utilized vision and force sensors' feedback to drive the robot toward the target (door and wall outlet). For close-range manipulation task, we built a simulation and trained the force-vision sensor-fusion control policy using deep reinforcement learning, finally transferred the simulation-trained control policies to the real-world robot.</p>
        </div>
    )
}

const Project9_publications = () => {
    return (
        <div style={{ padding: '20px' }}>
            <ul>
                <li>Sun, Yufeng, Lin Zhang, and Ou Ma. “Force-Vision Sensor Fusion Improves Learning-based Approach for Self-Closing Door Pulling.” IEEE Access (2021).</li>
            </ul>
        </div>
    );
}

export default function Project9() {
    return (
        <ProjectUI
            projectTitle="AI-based Solutions to Allow Mobile Robots to Open Self-closing Doors and Plug in Standard Power Outlets for Charging"
            projectTeaser=""
            projectDescription={Project9_Description}
            projectVideo={[{
                title: "Enable Service Robots to Open Self-Closing Doors",
                src: Prior_Project9_video1
            },{
                title: "Enable Service Robots to Charge Batteries",
                src: Prior_Project9_video2
            }]}
            publications={Project9_publications}
        />
    )
}
