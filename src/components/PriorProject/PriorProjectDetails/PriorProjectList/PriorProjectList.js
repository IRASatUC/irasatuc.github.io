import "./PriorProjectList.css"
import { Link } from "react-router-dom"
export default function PriorProjectList() {

    return (
      <div className='PriorProject'>
        <div>

          <h1>Prior Projects</h1>
          <ul>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/CurrentProject2">1. Intelligent and Collaborative Control of Multi-Robot Team</Link></li>
                  
            <li style={{fontWeight:"bold",cursor:"pointer"}}><Link to="/PriorProject/CurrentProject3">2. Visual-based Robotic Tracking of Arbitrarily defined Object</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/CurrentProject4">3. CableCat: Powering the PSR</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}}><Link to="/PriorProject/CurrentProject5">4. Physics-Based Mixed Reality Simulation</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/CurrentProject6">5. Multi-Robot Cooperative Object Transportation</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject11">6. Physical Simulation of a Human-Driving Vehicle in Lab Environment</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject10">7. UAV-Manipulator Systems for Aerial Manipulation</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject8">8. AI and Robotics Assisted 3D Scanning for Inspection or Rapid and Accurate Reverse Engineering</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject7">9. Multi-Vehicle Cooperative Object Transportation</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject6">10. Multi-Agent Pursuit and Evasion</Link></li>
            <li>11. Contact Dynamics Modeling, Analysis and Control</li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject1">12. SPDM Task Verification Facility (STVF)</Link></li>
            <li >13. European Proximity Operations Simulator (EPOS)</li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject2">14. Reduced-Gravity and Biomechanics (RGB) Lab at NMSU</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}}><Link to="/PriorProject/PriorProject13">15. Contact Dynamics Modeling and Simulation</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject3">16. Technology for Simulating Human Activities in Partial Gravity</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject4">17. Risk of Falling Assessment for Older Adults</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject17"> 18. Identification of Mass Distribution of a Live Human</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject18">19. Design and Control of Unmanned Arial Vehicles</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}}><Link to="/PriorProject/PriorProject19">20. Student-Led Flight Experiments</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject14">21. Robot Control for Capturing a Non-cooperative Object</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject21">22. Bio Inspired Hopping Locomotion for Lunar Exploration</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject23">23. Prediction of Human Action Intention or Outcome</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/PriorProject5">24. Space Robot Control for On-Orbit Servicing</Link></li>


          </ul>
        </div>
      </div>
    )
  }