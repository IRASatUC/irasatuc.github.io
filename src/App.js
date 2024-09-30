import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import { useState, useRef, useEffect } from 'react';
import PriorProject from './components/PriorProject/PriorProject';
import CurrentProjects from './components/CurrentProjects/CurrentProjects';
import People from './components/People/People';
import Publication from './components/Publication/Publication';
import News from './components/News/News';
//CURRENT PROJECT IMPORT
import CurrentProject1 from './components/CurrentProjects/CurrentProjectContents/CurrentProject1/CurrentProject1';
import CurrentProject2 from './components/CurrentProjects/CurrentProjectContents/CurrentProject2/CurrentProject2';
import CurrentProject3 from './components/CurrentProjects/CurrentProjectContents/CurrentProject3/CurrentProject3';
import CurrentProject4 from './components/CurrentProjects/CurrentProjectContents/CurrentProject4/CurrentProject4';
import CurrentProject5 from './components/CurrentProjects/CurrentProjectContents/CurrentProject5/CurrentProject5';
import CurrentProject6 from './components/CurrentProjects/CurrentProjectContents/CurrentProject6/CurrentProject6';
import CurrentProjectList from './components/CurrentProjects/CurrentProjectContents/CurrentProjectList/CurrentProjectList';

//PRIOR PROJECTS IMPORT
import PriorProject1 from './components/PriorProject/PriorProjectDetails/PriorProject1_SPDM_Task_Verification_Facility_(STVF)/PriorProject1';
import PriorProject2 from './components/PriorProject/PriorProjectDetails/PriorProject2_Reduced-Gravity_and_Biomechanics_(RGB)_Lab_at_NMSU/PriorProject2';
import PriorProject3 from './components/PriorProject/PriorProjectDetails/PriorProject3_Technology_for_Simulating_Human_Activities_in_Partial_Gravity/PriorProject3';
import PriorProject4 from './components/PriorProject/PriorProjectDetails/PriorProject4_Risk_of_Falling_Assessment_for_Older_Adults/PriorProject4';
import PriorProject5 from './components/PriorProject/PriorProjectDetails/PriorProject5_Space_Robot_Control_for_On-Orbit_Servicing/PriorProject5';
import PriorProject6 from './components/PriorProject/PriorProjectDetails/PriorProject6_Multi-Agent_Pursuit_and_Evasion/PriorProject6';
import PriorProject7 from './components/PriorProject/PriorProjectDetails/PriorProject7_ Multi-Vehicle_Cooperative_Object _Transportation/PriorProject7';
import PriorProject8 from './components/PriorProject/PriorProjectDetails/PriorProject8_AI_and_Robotics_Assisted_3D_Scanning_for_Inspection_or_Rapid_and_Accurate_Reverse_Engineering/PriorProject8';
import  PriorProject9 from './components/PriorProject/PriorProjectDetails/PriorProject9_Autonomous_Mobile_Robot_for_Door_Opening/PriorProject9';
import PriorProject10 from './components/PriorProject/PriorProjectDetails/PriorProject10_UAV-Manipulator_Systems_for_Aerial_Manipulation/PriorProject10';
import PriorProject11 from './components/PriorProject/PriorProjectDetails/PriorProject11_Physical_Simulation_of_a_Human-Driving_Vehicle_in_Lab_Environment/PriorProject11';
import PriorProject12 from './components/PriorProject/PriorProjectDetails/PriorProject12_Optimal_Attitude_Profiling_of_A_12U_Scientific_CubeSat/PriorProject12';
import PriorProject13 from './components/PriorProject/PriorProjectDetails/PriorProject13_Contact_Dynamics_Modeling_and_Simulation/PriorProject13';
import PriorProject14 from './components/PriorProject/PriorProjectDetails/PriorProject14_Robot_Control _for_Capturing_a_Non-cooperative_Object/PriorProject14';
import PriorProject17 from './components/PriorProject/PriorProjectDetails/PriorProject17_Identification_of_Mass_Distribution_of_a_Live_Human/PriorProject17';
import PriorProject18 from './components/PriorProject/PriorProjectDetails/PriorProject18_Design_and_Control_of_Unmanned_Arial_Vehicles/PriorProject18';
import PriorProject19 from './components/PriorProject/PriorProjectDetails/PriorProject19_Student-Led_Flight_Experiments/PriorProject19';
import PriorProject21 from './components/PriorProject/PriorProjectDetails/PriorProject21_Bio-Inspired_Hopping_Locomotion_for_Lunar_Exploration/PriorProject21';
import PriorProject23 from './components/PriorProject/PriorProjectDetails/PriorProject23_Prediction_of_Human_Action_Intention_or_Outcome/PriorProject23';
import PriorProjectList from './components/PriorProject/PriorProjectDetails/PriorProjectList/PriorProjectList';
import { BrowserRouter, Routes, Route,Outlet } from "react-router-dom";



function App() {
  const [routes, setRoutes] = useState('About');

  useEffect(() => {
    const desiredRoute = window.location.href.split("/").pop();
    setRoutes(desiredRoute);
    console.log(routes, desiredRoute);
  }, [routes]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={< About />} />
            <Route path="/News" element={< News />} />
            <Route path="/PriorProject" element={< PriorProject />} >
              <Route index element={< PriorProjectList />} />
              <Route path="/PriorProject/CurrentProject2" element={< CurrentProject2 />} />
              <Route path="/PriorProject/CurrentProject3" element={< CurrentProject3 />} />
              <Route path="/PriorProject/CurrentProject4" element={< CurrentProject4/>} />
              <Route path="/PriorProject/CurrentProject5" element={< CurrentProject5 />} />
              <Route path="/PriorProject/CurrentProject6" element={< CurrentProject6 />} />   
              <Route path="/PriorProject/PriorProject1" element={< PriorProject1 />} />
              <Route path="/PriorProject/PriorProject2" element={< PriorProject2 />} />
              <Route path="/PriorProject/PriorProject3" element={< PriorProject3 />} />
              <Route path="/PriorProject/PriorProject4" element={< PriorProject4/>} />
              <Route path="/PriorProject/PriorProject6" element={< PriorProject6 />} />
              <Route path="/PriorProject/PriorProject7" element={< PriorProject7 />} />
              <Route path="/PriorProject/PriorProject8" element={< PriorProject8 />} />
              <Route path="/PriorProject/PriorProject10" element={< PriorProject10/>} />
              <Route path="/PriorProject/PriorProject11" element={< PriorProject11/>} />
              <Route path="/PriorProject/PriorProject13" element={< PriorProject13/>} />    
              <Route path="/PriorProject/PriorProject14" element={< PriorProject14/>} />    
              <Route path="/PriorProject/PriorProject17" element={< PriorProject17/>} />    
              <Route path="/PriorProject/PriorProject18" element={< PriorProject18/>} />
              <Route path="/PriorProject/PriorProject19" element={< PriorProject19/>} />    
              <Route path="/PriorProject/PriorProject21" element={< PriorProject21/>} />    
              <Route path="/PriorProject/PriorProject23" element={< PriorProject23/>} />    


            </Route>
            <Route path="/CurrentProjects" element={< CurrentProjects />} >
              <Route index element={< CurrentProjectList />} />
              <Route path="/CurrentProjects/CurrentProject1" element={< CurrentProject1 />} />
              <Route path="/CurrentProjects/PriorProject9" element={< PriorProject9 />} />
              <Route path="/CurrentProjects/PriorProject5" element={< PriorProject5 />} />
              <Route path="/CurrentProjects/PriorProject12" element={< PriorProject12/>} /> 
              <Route path="/CurrentProjects/PriorProject14" element={< PriorProject14/>} />                   
            </Route>
            <Route path="/People" element={< People />} />
            <Route path="/Publication" element={< Publication />} />
           
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
