import ProjectUI from "../../../reusables/ProjectUI/ProjectUI";
import Picture1DrLiJPG from "./Picture1DrLi.jpg";

function Project29_Description() {
    return (
        <div style={{padding: '20px'}}>
            <h1 className="ProjectUI_header pt-0">Enhancing Human-Robot Interaction Safety in Manufacturing Using 3D Vision and Machine Learning Technologies </h1>

            <h2 className="ProjectUI_header">Objectives</h2>
            <p> •   Build a 3D vision–fusion system that prevents collisions in shared human–robot workspaces. <br />
                •	Use multiple RGB-D cameras to track human motion in real time. <br />
                •	Add simple on-robot proximity sensors to maintain safety when cameras are blocked. <br />
                •	Create live 3D models of humans and robots to map changing danger zones. <br />
                •	Predict how humans and robots will move relative to each other to calculate a danger index. <br />
                •	Trigger proactive robot responses—slowing down, pausing, or stopping—before a risk becomes critical.

    
            </p> <br />

            <h2 className="ProjectUI_header">Technologies</h2>
            <p> •	AI-powered 3D tracking: Deep-learning models combine views from several RGB-D cameras to follow human and robot motion accurately. <br />
                •	On-robot sensing: Capacitive or proximity sensors act as a safety backup when vision data is limited.<br />
                •	3D geometric modeling: Sphere-based body models capture where tools, robot arms, and human limbs are in space to define safety zones.<br />
                •	Motion prediction: Machine-learning algorithms anticipate human motion and robot behavior to compute a real-time danger index.<br />
                •	Integrated system: Surround-view cameras, IoT devices, and edge computing work together to evaluate safety continuously.

            </p> <br />

            <h2 className="ProjectUI_header">Benefits</h2>
            <p> •	Prevention over reaction: Detects unsafe situations before contact occurs—an improvement over traditional force-based cobot safety. <br />
                •	Higher efficiency: Robots can operate faster and more confidently while still protecting workers. <br />
                •	Reliable performance: Redundant sensing ensures safety even with occlusion or environmental challenges.<br />
                •	Improved awareness: Real-time movement understanding provides clearer insight into human–robot interactions.<br />
                •	Easy to adapt: Works with different robot types, tools, and manufacturing setups.

            </p> <br />

            <h2 className="ProjectUI_header">Application Domains</h2>
            <ol className="list-decimal">
                <li><b>Industrial robot manufacturers (e.g., KUKA, OMRON)</b>
                </li>
                <li><b>System integrators specializing in machine vision, digital twins, and smart manufacturing</b>
                </li>
                <li><b>Companies using collaborative robots in automotive, consumer goods, medical device, and hygiene-product manufacturing</b>
                </li>
            </ol>

            <br />
            <img src={Picture1DrLiJPG} className="mx-auto" alt="Proposed Methodology"/>
            <div className="text-center pb-10">
                <br />
                <b>Figure 1.</b> Proposed methodology for enhancing human–robot interaction safety in manufacturing
            </div>
            
        </div>
    )
}



export default function Project29() {
    return (
        <ProjectUI
            projectDescription={Project29_Description}
            
        />
    )
}
