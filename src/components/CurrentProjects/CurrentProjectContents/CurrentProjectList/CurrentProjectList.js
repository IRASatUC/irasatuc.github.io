import "./CurrentProjectList.css";
import { BrowserRouter, Routes, Route,Outlet,Link } from "react-router-dom";

export default function CurrentProjectList() {
    return (
      <div className='CurrentProjects'>
          <div>
              <h1>Current Projects</h1>
              <ul>
                                     
                  <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/CurrentProjects/CurrentProject1">1. Development of A 3D Proximity-Operation Test System for On-Orbit Servicing a Non-Cooperative Object</Link></li>
                 
                  <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/CurrentProjects/CurrentProject2">2. Intelligent and Collaborative Control of Multi-Robot Team</Link></li>
                  
                  <li style={{fontWeight:"bold",cursor:"pointer"}}><Link to="/CurrentProjects/CurrentProject3">3. Visual-based Robotic Tracking of Arbitrarily defined Object</Link></li>
                  <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/CurrentProjects/CurrentProject4">4. CableCat: Powering the PSR</Link></li>
                  <li style={{fontWeight:"bold",cursor:"pointer"}}><Link to="/CurrentProjects/CurrentProject5">5. Physics-Based Mixed Reality Simulation</Link></li>
                  <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/CurrentProjects/CurrentProject6">6. Drone Team Collaboration as A Distributed System</Link></li>
              </ul>
          </div>
      </div>
    )
  }