import ProjectUI from '../../../../reusables/ProjectUI/ProjectUI';
import architecture from "./architecture.jpg";
import interface_img from "./interface.jpg";
import CurrentProject5_video1 from "./CurrentProject5_video1.mp4";
function CurrentProject5_Description() {
    return (

        <div style={{ padding: '20px' }}>

            <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Objectives</h2>
            <ul style={{ listStyleType: 'disc' }}>
                <li>Develop an architecture of multi-mode simulation including 3D visual, audio, force and motion effects, all driven by physics-based and hardware-in-the-loop dynamic simulations.</li>
                <li>Develop physics-based multibody system dynamics models, contact dynamics models, vibration and acoustic models and their real-time simulation algorithms and software to drive the multi-mode rendering equipment.</li>
                <li>System level design, requirements development, and simulation-based feasibility study of a prototype of the proposed multi-mode simulation system.</li>
            </ul>

            <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Approach</h2>
            <p>Combine the virtual reality (VR) and/or augment reality (AR) technologies with physics-based 3D dynamic motion simulation, haptic feedback, and acoustic simulation technologies to create a realistic human sensation experience. A hardware-in-the-loop simulation facility is being developed.</p>

            <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Applications</h2>
            <ul style={{ listStyleType: 'disc' }}>
                <li>Study and characterize human performance when operating equipment</li>
                <li>Assess human performance for challenging operations in special environment</li>
                <li>Safely train operators to perform risky tasks in an extreme environment</li>
            </ul>
        </div>
    )
}

export default function CurrentProject5() {
    return (
        <ProjectUI
            projectTitle="Physics-Based Mixed Reality Simulation"
            projectTeaser=""
            projectDescription={CurrentProject5_Description}
            projectImage={[{
                title: "",
                src: architecture
            },{
                title: "",
                src: interface_img
            }]}
            projectVideo={[{
                title: "",
                src: CurrentProject5_video1
            }]
}
        />
    )
}