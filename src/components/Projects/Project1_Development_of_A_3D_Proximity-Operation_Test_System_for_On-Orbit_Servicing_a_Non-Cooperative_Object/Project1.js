import ProjectUI from '../../../reusables/ProjectUI/ProjectUI';
import operation_concept from './operation_concept.jpg';
import tumbling from './Tumbling satellite.mp4'

function Project1_Description(){

  return(
    <div>
        <h2><strong>Objectives</strong></h2>
        <ul style={{listStyleType:"disc",marginLeft:"20px"}}>
            <li>Design and construct a unique 3D proximity-operation test system for flying around, inspecting, or servicing a non-cooperative object in orbit.</li>
            <li>Investigate the fidelity and performance of the test system.</li>
        </ul>
        <h2><strong>Technology</strong></h2>
        <ul style={{listStyleType:"disc",marginLeft:"20px"}}>
            <li>Unique method of rendering accurate 3D tumbling (3-axis rotation while keeping the mass center at rest).</li>
            <li>Hardware-in-the-loop (real-time) dynamic simulation of in a fully controlled environment.</li>
            <li>Method to test multi-agent dynamic behavior for team co-operations.</li>
            <li>Scalable in terms of team size and the 3D space.</li>
        </ul>
        <h2><strong>Benefits</strong></h2>
        <ul style={{listStyleType:"disc",marginLeft:"20px"}}>
            <li>Allows to physically test 3D proximity motion behavior which are difficult to do on other types of ground-based test facilities.</li>
            <li>Allows to visualize and test physical group behavior of a team of servicing vehicles in orbit.</li>
            <li>Allows to test real sensors and other hardware components in an integrated system.</li>
            <li>Provides a safe and fully controlled testing environment.</li>
        </ul>
    </div>
  )
}
export default function Project1() {
  
  return (
    <ProjectUI 
      Background={tumbling }
      projectTitle="Development of A 3D Proximity-Operation Test System for On-Orbit Servicing a Non-Cooperative Object"
      projectTeaser=""
      projectDescription={Project1_Description}
      projectImage={[{title:"",src:operation_concept}]}

    />
  )
}