import './PriorProject.css';
import { useState, useEffect } from 'react';
import PriorProject1 from './PriorProjectDetails/PriorProject1/PriorProject1';
import PriorProject2 from './PriorProjectDetails/PriorProject2/PriorProject2';
import PriorProject3 from './PriorProjectDetails/PriorProject3/PriorProject3';
import PriorProject4 from './PriorProjectDetails/PriorProject4/PriorProject4';
import PriorProject5 from './PriorProjectDetails/PriorProject5/PriorProject5';
import PriorProject6 from './PriorProjectDetails/PriorProject6/PriorProject6';
import PriorProject7 from './PriorProjectDetails/PriorProject7/PriorProject7';
import PriorProject8 from './PriorProjectDetails/PriorProject8/PriorProject8';
import  PriorProject9 from './PriorProjectDetails/PriorProject9/PriorProject9';
import PriorProject10 from './PriorProjectDetails/PriorProject10/PriorProject10';
import PriorProject11 from './PriorProjectDetails/PriorProject11/PriorProject11';
import PriorProject12 from './PriorProjectDetails/PriorProject12/PriorProject12';
export default function PriorProject() {
  const [priorProject, setPriorProject] = useState('');
  function PriorProjectList() {
    return (
      <div className='PriorProject'>
        <div>

          <h1>Prior Projects</h1>
          <ul>
            <li style={{fontWeight:"bold",cursor:"pointer"}} onClick={() => setPriorProject("PriorProject5")}>1. Physical Simulation of a Human-Driving Vehicle in Lab Environment</li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} onClick={() => setPriorProject("PriorProject6")}>2. UAV-Manipulator Systems for Aerial Manipulation</li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} onClick={() => setPriorProject("PriorProject7")}>3. Autonomous Mobile Robot for Door Opening</li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} onClick={() => setPriorProject("PriorProject8")}>4. Robotics Assisted 3D Scanning of Aircraft for Reverse Engineering</li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} onClick={() => setPriorProject("PriorProject9")}>5. Multi-Robot Cooperative Object Transportation</li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} onClick={() => setPriorProject("PriorProject10")}>6. Multi-Agent Pursuit and Evasion</li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} onClick={() => setPriorProject("PriorProject11")}>7. Space Robot Control for On-Orbit Servicing</li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} onClick={() => setPriorProject("PriorProject12")}>8. Optimal Attitude Profiling of A 12U Scientific CubeSat</li>
            <li>9. Contact Dynamics Modeling, Analysis and Control</li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} onClick={() => setPriorProject("PriorProject1")}>10. SPDM Task Verification Facility (STVF)</li>
            <li>11. European Proximity Operations Simulator (EPOS)</li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} onClick={() => setPriorProject("PriorProject2")}>12. Reduced-Gravity and Biomechanics (RGB) Lab at NMSU</li>
            <li>13. Contact Dynamics Modeling and Simulation</li>
            <li>14. Robot Control for Capturing a Non-cooperative Object</li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} onClick={() => setPriorProject("PriorProject3")}>15. Technology for Simulating Human Activities in Partial Gravity</li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} onClick={() => setPriorProject("PriorProject4")}>16. Risk of Falling Assessment for Older Adults</li>
            <li>17. Identification of Mass Distribution of a Live Human</li>
            <li>18. Design and Control of Unmanned Arial Vehicles</li>
            <li>19. Student-Led Flight Experiments</li>
          </ul>
        </div>
      </div>
    )
  }
  function priorProject_paginations(routes) {
    switch (routes) {
      case 'priorProjectList':
        return <PriorProjectList />
        break;
      case 'PriorProject1':
        return <PriorProject1 />
        break;
      case 'PriorProject2':
        return <PriorProject2 />
        break;
      case 'PriorProject3':
        return <PriorProject3 />
        break;
      case 'PriorProject4':
        return <PriorProject4 />
        break;
      case 'PriorProject5':
        return <PriorProject5 />
        break;
      case 'PriorProject6':
        return <PriorProject6 />
        break;
      case 'PriorProject7':
        return <PriorProject7 />
        break;
      case 'PriorProject8':
        return <PriorProject8 />
        break;
      case 'PriorProject9':
        return <PriorProject9 />
        break;
      case 'PriorProject10':
        return <PriorProject10 />
        break;
      case 'PriorProject11':
        return <PriorProject11 />
        break;
      case 'PriorProject12':
        return <PriorProject12 />
        break;
       default:
        return <PriorProjectList />
    }
  }
  return (
    <div  >
      {priorProject_paginations(priorProject)}
    </div>
  )
}




