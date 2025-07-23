import ProjectUI from '../../../reusables/ProjectUI/ProjectUI';
import drone_collaboration from "./drone_collab.jpg";

function Project6_Description() {
    return (
        <div>
            <div style={{padding: "20px"}}>
                <h1 className="ProjectUI_header pt-0">Multi-Robot Cooperative Object Transportation</h1>

                <h2 className="ProjectUI_header">Research Goal</h2>
                <p>Development of a decentralized system of collaborative UAVs that can jointly bring a large load from one place to another.</p>

                <h2 className="ProjectUI_header">Strategic Alignment</h2>
                <p>Decentralized collaborative system of UAVs provide the ability to lift heavy loads while also simultaneously reducing the dependence on any individual UAV in the team.</p>

                <h2 className="ProjectUI_header">Objectives</h2>
                <ul style={{listStyleType:"disc"}}>
                    <li>Develop a physics-based simulation environment for multi-UAV load-transportation system.</li>
                    <li>Develop machine learning-based controllers for each UAV with the goal of transporting the load, by working as a team.</li>
                    <li>Extend the methodology to real-life control of multiple collaborative UAVs.</li>
                </ul>

                <h2 className="ProjectUI_header">Approach</h2>
                <p>Apply Genetic Fuzzy Methodology (GFM) or Machine Learning (ML) techniques to train the system of UAVs to achieve the common goal of transporting a load to a target location. By penalizing undesirable actions, GA/ML can tune the controller parameters to ensure near-optimal performance by the UAV team.</p>

                <h2 className="ProjectUI_header">Applications</h2>
                <ul style={{listStyleType:"disc"}}>
                    <li>Lifting heavy objects in industrial and military missions.</li>
                    <li>Agile communication and connection for fast responding natural disasters.</li>
                    <li>Agile sensor networking for quick situation awareness.</li>
                </ul>

                <h2 className="ProjectUI_header">State-of-the-art</h2>
                <p>UAV team activities are mostly limited to formation flights coordinated by a centralized controller which is vulnerable to security or reliability problems. An individual UAV's behavior can easily affect the performance of the entire team.</p>
            </div>
        </div>
    )
}

const Project6_publications = () => {
    return (
        <div style={{padding: "20px"}}>
            <ul style={{listStyleType:"disc"}}>
                <li>
                    Bisig, Caleb and Ma, Ou; “Scalable and Robust Decentralized Cargo Transport via Genetic Fuzzy Systems”, Proc. of 2022 AIAA SciTech, San Diego, https://doi.org/10.2514/6.2022-1728.
                </li>
                <li>
                    Sathyan, A.; Ma, O. and Cohen, K.; “Genetic Fuzzy Methodology for Decentralized Cooperative UAVs to Transport a Shared Payload”, Drones, 2023. https://doi.org/10.3390/drones7020103
                </li>
            </ul>
        </div>
    );
}

export default function Project6() {
    return (
        <ProjectUI
            projectTitle="Intelligent and Collaborative Control of Multiple Robots"
            projectTeaser=""
            projectDescription={Project6_Description}
            projectImage={[{
                title: "",
                src: drone_collaboration
            }]}
            publications={Project6_publications}
        />
    )
}
