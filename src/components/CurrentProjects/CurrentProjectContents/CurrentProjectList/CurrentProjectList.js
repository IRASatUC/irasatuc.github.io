import "./CurrentProjectList.css";
import { BrowserRouter, Routes, Route,Outlet,Link } from "react-router-dom";

export default function CurrentProjectList() {
    return (
      <div className='CurrentProjects'>
          <div>
              <h1>Current Projects</h1>
              <ul>
                                     
                  <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/CurrentProjects/Project7">1. Development of Advanced Space Robotics Technologies to Enable 
Challenging In-Space Operations for ISAM and Space Logistics 
</Link></li>

                  <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/CurrentProjects/Project1">2. Development of A 3D Proximity-Operation Test System for On-Orbit Servicing a Non-Cooperative Object</Link></li>
                  <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/CurrentProjects/Project9">3. AI-based Solution for Mobile Robots to Open a Self-closing Door and Pass through the Doorway</Link></li>
                  <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/CurrentProjects/Project12">4. Optimal Attitude Profiling of A 12U Scientific CubeSat</Link></li>
                  <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/CurrentProjects/Project16">5. Robot Control for Capturing a Non-cooperative Object</Link></li>

                 
              </ul>
          </div>
      </div>
    )
  }