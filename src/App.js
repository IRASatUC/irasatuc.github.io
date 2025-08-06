//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import PriorProject from './components/PriorProject/PriorProject';
import CurrentProjects from './components/CurrentProjects/CurrentProjects';
import People from './components/People/People';
import Publications from './components/Publications/Publications';
import News from './components/News/News';
//import Opportunities from './components/Opportunities/Opportunities';
//import OpportunitiesList from './components/Opportunities/OpportunitiesDetails/OpportunitiesList/OpportunitiesList';

//CURRENT PROJECT IMPORT
import CurrentProjectList from './components/CurrentProjects/CurrentProjectContents/CurrentProjectList/CurrentProjectList';

//PRIOR PROJECTS IMPORT
import PriorProjectList from './components/PriorProject/PriorProjectDetails/PriorProjectList/PriorProjectList';

//import project
import Project1 from './components/Projects/Project1_Development_of_A_3D_Proximity-Operation_Test_System_for_On-Orbit_Servicing_a_Non-Cooperative_Object/Project1';
import Project2 from './components/Projects/Project2_Identification_of_Mass_Distribution_of_a_Live_Human/Project2';
import Project3 from './components/Projects/Project3_Intelligent_and_Collaborative_Control_of_Multiple_Robots/Project3';
import Project4 from './components/Projects/Project4_Multi-Agent_Pursuit_and_Evasion/Project4'
import Project5 from './components/Projects/Project5_Multi-Vehicle_Cooperative_Object _Transportation/Project5';
import Project6 from './components/Projects/Project6_Multi-Robot_Cooperative_Object_Transportation/Project6';
import Project7 from './components/Projects/Project7_Development_of_Advanced_Space_Robotics_Technologies_to_Enable_Challenging_In-Space_Operations_for_ISAM_and_Space_Logistics/Project7';
import Project8 from './components/Projects/Project8_AI_and_Robotics_Assisted_3D_Scanning_for_Inspection_or_Rapid_and_Accurate_Reverse_Engineering/Project8';
import Project9 from './components/Projects/Project9_Autonomous_Mobile_Robot_for_Door_Opening/Project9';
import Project10 from './components/Projects/Project10_Physics-Based_Mixed_Reality_Simulation/Project10';
import Project11 from './components/Projects/Project11_Physical_Simulation_of_a_Human-Driving_Vehicle_in_Lab_Environment/Project11';
import Project12 from './components/Projects/Project12_Optimal_Attitude_Profiling_of_A_12U_Scientific_CubeSat/Project12';
import Project13 from './components/Projects/Project13_Contact_Dynamics_Modeling_and_Simulation/Project13';
import Project14 from './components/Projects/Project14_Reduced-Gravity_and_Biomechanics_(RGB)_Lab_at_NMSU/Project14';
import Project15 from './components/Projects/Project15_Risk_of_Falling_Assessment_for_Older_Adults/Project15';
import Project16 from './components/Projects/Project16_Robot_Control_for_Capturing_a_Non-cooperative_Object/Project16';
import Project17 from './components/Projects/Project17_Space_Robot_Control_for_On-Orbit_Servicing/Project17';
import Project18 from './components/Projects/Project18_Design_and_Control_of_Unmanned_Arial_Vehicles/Project18';
import Project19 from './components/Projects/Project19_SPDM_Task_Verification_Facility_(STVF)/Project19';
import Project20 from './components/Projects/Project20_Student-Led_Flight_Experiments/Project20';
import Project21 from './components/Projects/Project21_Bio-Inspired_Hopping_Locomotion_for_Lunar_Exploration/Project21';
import Project22 from './components/Projects/Project22_Student-Led_Project_proposed_to_NASA_BIG_Idea_Challenge/Project22';
import Project23 from './components/Projects/Project23_Prediction_of_Human_Action_Intention_or_Outcome/Project23';
import Project24 from './components/Projects/Project24_Technology_for_Simulating_Human_Activities_in_Partial_Gravity/Project24';
import Project25 from './components/Projects/Project25_UAV-Manipulator_Systems_for_Aerial_Manipulation/Project25';
import Project26 from './components/Projects/Project26_Visual-based_Robot_Tracking_of_Arbitrarily_Defined_Object/Project26';
import Project27 from './components/Projects/Project27_Study_of_Squirrel_s_Capability_of_Stabilizing_Its_Head_while_Body_Tumbling/Project27';
import Project28 from './components/Projects/Project28_Physics_Enhanced_Deep_Learning_for_Faster_than_Real_Time_Prediction_of_Dynamic_Behavior_of_Space_Robotic_Systems/Project28';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { MathJaxContext } from "better-react-mathjax";
import ScrollToTop from "./reusables/ScrollToTop/ScrollToTop";

const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["latex$", "latex$"],
      ["latex\\(", "latex\\)"]
    ],
    displayMath: [
      ["latex$$", "latex$$"],
      ["latex\\[", "latex\\]"]
    ]
  }
};

export default function App() {
  const [routes, setRoutes] = useState('About');
    useEffect(() => {
        const desiredRoute = window.location.href.split("/").pop();
        setRoutes(desiredRoute);
        console.log(routes, desiredRoute);
    }, [routes]);
    return (
        <MathJaxContext version={3} config={config}>
            <div>
                <BrowserRouter basename="/IRAS-Lab"> {/* Use basename if deployed under a subdirectory */}
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<Nav />}>
                            <Route index element={<About />} />
                            <Route path="News" element={<News />} />
                            {/*<Route path="Opportunities" element={<Opportunities />}>
                                <Route index element={<OpportunitiesList />} />
                            </Route>*/}
                            {/* PriorProject Routes */}
                            <Route path="PriorProject" element={<PriorProject />}>
                                <Route index element={<PriorProjectList />} />
                                <Route path="Project2" element={<Project2 />} />
                                <Route path="Project3" element={<Project3 />} />
                                <Route path="Project4" element={<Project4 />} />
                                <Route path="Project5" element={<Project5 />} />
                                <Route path="Project6" element={<Project6 />} />
                                <Route path="Project8" element={<Project8 />} />
                                <Route path="Project10" element={<Project10 />} />
                                <Route path="Project11" element={<Project11 />} />
                                <Route path="Project13" element={<Project13 />} />
                                <Route path="Project14" element={<Project14 />} />
                                <Route path="Project15" element={<Project15 />} />
                                <Route path="Project17" element={<Project17 />} />
                                <Route path="Project18" element={<Project18 />} />
                                <Route path="Project19" element={<Project19 />} />
                                <Route path="Project20" element={<Project20 />} />
                                <Route path="Project21" element={<Project21 />} />
                                <Route path="Project22" element={<Project22 />} />
                                <Route path="Project23" element={<Project23 />} />
                                <Route path="Project24" element={<Project24 />} />
                                <Route path="Project25" element={<Project25 />} />
                                <Route path="Project26" element={<Project26 />} />
                                <Route path="Project27" element={<Project27 />} />
                            </Route>

                            {/* CurrentProjects Routes */}
                            <Route path="CurrentProjects" element={<CurrentProjects />}>
                                <Route index element={<CurrentProjectList />} />
                                <Route path="Project7" element={<Project7 />} />
                                <Route path="Project1" element={<Project1 />} />
                                <Route path="Project9" element={<Project9 />} />
                                <Route path="Project12" element={<Project12 />} />
                                <Route path="Project16" element={<Project16 />} />
                                <Route path="Project28" element={<Project28 />} />
                            </Route>

                            <Route path="People" element={<People />} />
                            <Route path="Publications" element={<Publications />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </MathJaxContext>
    );
}
