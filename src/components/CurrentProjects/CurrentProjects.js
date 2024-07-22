import './CurrentProjects.css';
import { useState } from 'react';
import CurrentProject1 from './CurrentProjectContents/CurrentProject1/CurrentProject1';
import CurrentProject2 from './CurrentProjectContents/CurrentProject2/CurrentProject2';
import CurrentProject3 from './CurrentProjectContents/CurrentProject3/CurrentProject3';
import CurrentProject4 from './CurrentProjectContents/CurrentProject4/CurrentProject4';
import CurrentProject5 from './CurrentProjectContents/CurrentProject5/CurrentProject5';
import CurrentProject6 from './CurrentProjectContents/CurrentProject6/CurrentProject6';
export default function CurrentProjects() {
    const [currentProject, setCurrentProject] = useState('');
    function CurrentProjectList() {
      return (
        <div className='CurrentProjects'>
            <div>
                <h1>Current Projects</h1>
                <ul>
                    <li style={{fontWeight:"bold",cursor:"pointer"}} onClick={() => setCurrentProject("CurrentProject1")}>Development of A 3D Proximity-Operation Test System for On-Orbit Servicing a Non-Cooperative Object</li>
                   
                    <li style={{fontWeight:"bold",cursor:"pointer"}} onClick={() => setCurrentProject("CurrentProject2")}>Intelligent and Collaborative Control of Multi-Robot Team</li>
                    
                    <li style={{fontWeight:"bold",cursor:"pointer"}} onClick={() => setCurrentProject("CurrentProject3")}>Visual-based Robotic Tracking of Arbitrarily defined Object</li>
                    <li style={{fontWeight:"bold",cursor:"pointer"}} onClick={() => setCurrentProject("CurrentProject4")}>CableCat: Powering the PSR</li>
                    <li style={{fontWeight:"bold",cursor:"pointer"}} onClick={() => setCurrentProject("CurrentProject5")}>Physics-Based Mixed Reality Simulation</li>
                    <li style={{fontWeight:"bold",cursor:"pointer"}} onClick={() => setCurrentProject("CurrentProject6")}>Drone Team Collaboration as A Distributed System</li>
                </ul>
            </div>
        </div>
      )
    }
    
    function currentProject_paginations(routes) {
        switch (routes) {
          case 'CurrentProjectList':
            return <CurrentProjectList />
            break;
          case 'CurrentProject1':
            return <CurrentProject1 />
            break;
          case 'CurrentProject2':
            return <CurrentProject2 />
            break;
          case 'CurrentProject3':
            return <CurrentProject3 />
            break;
          case 'CurrentProject4':
            return <CurrentProject4 />
            break;
          case 'CurrentProject5':
            return <CurrentProject5 />
            break;
          case 'CurrentProject6':
            return <CurrentProject6 />
            break;
          default:
            return <CurrentProjectList />
        }
      }
    return (
       <div>
              {currentProject_paginations(currentProject)}
       </div>
    )
}