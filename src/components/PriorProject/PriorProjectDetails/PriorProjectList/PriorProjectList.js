import "./PriorProjectList.css"
import { Link } from "react-router-dom"
export default function PriorProjectList() {

    return (
      <div className='PriorProject'>
        <div>

          <h1>Prior Projects</h1>
          <ul>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/Project3">1. Intelligent and Collaborative Control of Multi-Robot Team</Link></li>
                  
            <li style={{fontWeight:"bold",cursor:"pointer"}}><Link to="/PriorProject/Project26">2. Visual-based Robotic Tracking of Arbitrarily defined Object</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/Project22">3. CableCat: Powering the PSR</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}}><Link to="/PriorProject/Project10">4. Physics-Based Mixed Reality Simulation</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/Project6">5. Multi-Drone Decentralized Control for Collaborative Transporting a Large/Heavy Payload</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/Project11">6. Physical Simulation of a Human-Driving Vehicle in Lab Environment</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/Project25">7. UAV-Manipulator Systems for Aerial Manipulation</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/Project8">8. AI and Robotics Assisted 3D Scanning for Inspection or Rapid and Accurate Reverse Engineering</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/Project5">9. Multi-Vehicle Decentralized Control for Collaborative Object Transportation</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/Project4">10. Multi-Agent Pursuit and Evasion</Link></li>
            <li>11. Contact Dynamics Modeling, Analysis and Control</li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/Project19">12. SPDM Task Verification Facility (STVF)</Link></li>
            <li >13. European Proximity Operations Simulator (EPOS)</li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/Project14">14. Reduced-Gravity and Biomechanics (RGB) Lab at NMSU</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}}><Link to="/PriorProject/Project13">15. Contact Dynamics Modeling and Simulation</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/Project24">16. Technology for Simulating Human Activities in Partial Gravity</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/Project15">17. Risk of Falling Assessment for Older Adults</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/Project2"> 18. Identification of Mass Distribution of a Live Human</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/Project18">19. Design and Control of Unmanned Arial Vehicles</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}}><Link to="/PriorProject/Project20">20. Student-Led Flight Experiments</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/Project16">21. Robot Control for Capturing a Non-cooperative Object</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/Project21">22. Bio Inspired Hopping Locomotion for Lunar Exploration</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/Project23">23. Prediction of Human Action Intention or Outcome</Link></li>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/PriorProject/Project17">24. Space Robot Control for On-Orbit Servicing</Link></li>


          </ul>
        </div>
      </div>
    )
  }