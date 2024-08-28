import './CurrentProjects.css';
import { useState } from 'react';
import CurrentProject1 from './CurrentProjectContents/CurrentProject1/CurrentProject1';
import CurrentProject2 from './CurrentProjectContents/CurrentProject2/CurrentProject2';
import CurrentProject3 from './CurrentProjectContents/CurrentProject3/CurrentProject3';
import CurrentProject4 from './CurrentProjectContents/CurrentProject4/CurrentProject4';
import CurrentProject5 from './CurrentProjectContents/CurrentProject5/CurrentProject5';
import CurrentProject6 from './CurrentProjectContents/CurrentProject6/CurrentProject6';
import CurrentProjectList from './CurrentProjectContents/CurrentProjectList/CurrentProjectList';
import { BrowserRouter, Routes, Route,Outlet,Link } from "react-router-dom";

export default function CurrentProjects() {
    const [currentProject, setCurrentProject] = useState('');
    
    
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
        <Outlet/>
       </div>
    )
}