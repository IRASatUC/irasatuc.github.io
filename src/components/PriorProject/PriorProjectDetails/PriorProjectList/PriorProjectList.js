import "./PriorProjectList.css"
import { Link } from "react-router-dom"
export default function PriorProjectList() {

    return (
      <div className='PriorProject'>
        <div>

          <h1>Prior Projects</h1>
          <ul>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject5">1. Physical Simulation of a Human-Driving Vehicle in Lab Environment</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject6">2. UAV-Manipulator Systems for Aerial Manipulation</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject7">3. Autonomous Mobile Robot for Door Opening</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject8">4. Robotics Assisted 3D Scanning of Aircraft for Reverse Engineering</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject9">5. Multi-Robot Cooperative Object Transportation</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject10">6. Multi-Agent Pursuit and Evasion</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject11">7. Space Robot Control for On-Orbit Servicing</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject12">8. Optimal Attitude Profiling of A 12U Scientific CubeSat</Link></li>
            <li>9. Contact Dynamics Modeling, Analysis and Control</li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject1">10. SPDM Task Verification Facility (STVF)</Link></li>
            <li>11. European Proximity Operations Simulator (EPOS)</li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject2">12. Reduced-Gravity and Biomechanics (RGB) Lab at NMSU</Link></li>
            <li>13. Contact Dynamics Modeling and Simulation</li>
            <li>14. Robot Control for Capturing a Non-cooperative Object</li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject3">15. Technology for Simulating Human Activities in Partial Gravity</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject4">16. Risk of Falling Assessment for Older Adults</Link></li>
            <li>17. Identification of Mass Distribution of a Live Human</li>
            <li>18. Design and Control of Unmanned Arial Vehicles</li>
            <li>19. Student-Led Flight Experiments</li>
          </ul>
        </div>
      </div>
    )
  }