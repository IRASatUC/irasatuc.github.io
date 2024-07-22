import ProjectUI from '../../../../reusables/ProjectUI/ProjectUI';
import drone_collaboration from "./drone_collab.jpg";
function CurrentProject6_Description() {
    return (
        <div>
            <div style={{  padding: '20px' }}>
                <h1 style={{textAlign:"center",fontWeight:"bolder",paddingBottom:"20px"}}>Drone Team Collaboration as A Distributed System</h1>

                <h2 style={{textAlign:"center",paddingBottom:"20px",paddingTop:"20px",fontWeight:"bold"}}>Research Goal</h2>
                <p>Development of a decentralized system of collaborative UAVs that can jointly bring a large load from one place to another.</p>

                <h2 style={{textAlign:"center",paddingBottom:"20px",paddingTop:"20px",fontWeight:"bold"}}>Strategic Alignment</h2>
                <p>Decentralized collaborative system of UAVs provide the ability to lift heavy loads while also simultaneously reducing the dependence on any individual UAV in the team.</p>

                <h2 style={{textAlign:"center",paddingBottom:"20px",paddingTop:"20px",fontWeight:"bold"}}>Objectives</h2>
                <ul style={{listStyleType:"disc"}}>
                    <li>Develop a physics-based simulation environment for multi-UAV load-transportation system.</li>
                    <li>Develop machine learning-based controllers for each UAV with the goal of transporting the load, by working as a team.</li>
                    <li>Extend the methodology to real-life control of multiple collaborative UAVs.</li>
                </ul>

                <h2 style={{textAlign:"center",paddingBottom:"20px",paddingTop:"20px",fontWeight:"bold"}}>Approach</h2>
                <p>Apply Genetic Fuzzy Methodology (GFM) or Machine Learning (ML) techniques to train the system of UAVs to achieve the common goal of transporting a load to a target location. By penalizing undesirable actions, GA/ML can tune the controller parameters to ensure near-optimal performance by the UAV team.</p>

                <h2 style={{textAlign:"center",paddingBottom:"20px",paddingTop:"20px",fontWeight:"bold"}}>Applications</h2>
                <ul style={{listStyleType:"disc"}}>
                    <li>Lifting heavy objects in industrial and military missions.</li>
                    <li>Agile communication and connection for fast responding natural disasters.</li>
                    <li>Agile sensor networking for quick situation awareness.</li>
                </ul>

                <h2 style={{textAlign:"center",paddingBottom:"20px",paddingTop:"20px",fontWeight:"bold"}}>State-of-the-art</h2>
                <p>UAV team activities are mostly limited to formation flights coordinated by a centralized controller which is vulnerable to security or reliability problems. An individual UAV's behavior can easily affect the performance of the entire team.</p>
            </div>
        </div>
    )
}
const CurrentProject6_publications = () => {
    return (
      <div style={{ padding: '20px' }}>
        <ul>
          <li>
            Bisig C.; Montejo J.; Verbryke M.; Sathyan A.; and Ma O., “Genetic Fuzzy Systems for Decentralized, Multi-UAV Cargo Handling”, Proceedings of AIAA SciTech, Jan 6-10, 2020, Orlando, FL.
          </li>
        </ul>
      </div>
    );
  }
export default function CurrentProject6() {
    return (
        <ProjectUI
            projectTitle="Intelligent and Collaborative Control of Multiple Robots"
            projectTeaser=""
            projectDescription={CurrentProject6_Description}
            projectImage={[{
                title: "",
                src: drone_collaboration
            }]}
            publications={CurrentProject6_publications}

        />
    )
}