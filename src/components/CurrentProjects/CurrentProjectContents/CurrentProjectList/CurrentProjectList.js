import "./CurrentProjectList.css";
import { BrowserRouter, Routes, Route,Outlet,Link } from "react-router-dom";

export default function CurrentProjectList() {
    return (
      <div className='CurrentProjects'>
          <div>
              <h1>Current Projects</h1>
              <ul>
                                     
                  <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/CurrentProjects/CurrentProject1">1. Development of A 3D Proximity-Operation Test System for On-Orbit Servicing a Non-Cooperative Object</Link></li>
                  <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/CurrentProjects/PriorProject9">2. Autonomous Mobile Robot for Door Opening</Link></li>
                  <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/CurrentProjects/PriorProject5">3. Space Robot Control for On-Orbit Servicing</Link></li>
                  <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/CurrentProjects/PriorProject12">4. Optimal Attitude Profiling of A 12U Scientific CubeSat</Link></li>
                  <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/CurrentProjects/PriorProject14">5. Robot Control for Capturing a Non-cooperative Object</Link></li>

                 
              </ul>
          </div>
      </div>
    )
  }