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
import PriorProject1 from './components/PriorProject/PriorProjectDetails/PriorProject1/PriorProject1';
import PriorProject2 from './components/PriorProject/PriorProjectDetails/PriorProject2/PriorProject2';
import PriorProject3 from './components/PriorProject/PriorProjectDetails/PriorProject3/PriorProject3';
import PriorProject4 from './components/PriorProject/PriorProjectDetails/PriorProject4/PriorProject4';
import PriorProject5 from './components/PriorProject/PriorProjectDetails/PriorProject5/PriorProject5';
import PriorProject6 from './components/PriorProject/PriorProjectDetails/PriorProject6/PriorProject6';
import PriorProject7 from './components/PriorProject/PriorProjectDetails/PriorProject7/PriorProject7';
import PriorProject8 from './components/PriorProject/PriorProjectDetails/PriorProject8/PriorProject8';
import  PriorProject9 from './components/PriorProject/PriorProjectDetails/PriorProject9/PriorProject9';
import PriorProject10 from './components/PriorProject/PriorProjectDetails/PriorProject10/PriorProject10';
import PriorProject11 from './components/PriorProject/PriorProjectDetails/PriorProject11/PriorProject11';
import PriorProject12 from './components/PriorProject/PriorProjectDetails/PriorProject12/PriorProject12';
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
              <Route path="/PriorProject/PriorProject1" element={< PriorProject1 />} />
              <Route path="/PriorProject/PriorProject2" element={< PriorProject2 />} />
              <Route path="/PriorProject/PriorProject3" element={< PriorProject3 />} />
              <Route path="/PriorProject/PriorProject4" element={< PriorProject4/>} />
              <Route path="/PriorProject/PriorProject5" element={< PriorProject5 />} />
              <Route path="/PriorProject/PriorProject6" element={< PriorProject6 />} />
              <Route path="/PriorProject/PriorProject7" element={< PriorProject7 />} />
              <Route path="/PriorProject/PriorProject8" element={< PriorProject8 />} />
              <Route path="/PriorProject/PriorProject9" element={< PriorProject9 />} />
              <Route path="/PriorProject/PriorProject10" element={< PriorProject10/>} />
              <Route path="/PriorProject/PriorProject11" element={< PriorProject11/>} />
              <Route path="/PriorProject/PriorProject12" element={< PriorProject12/>} />    
            </Route>
            <Route path="/CurrentProjects" element={< CurrentProjects />} >
              <Route index element={< CurrentProjectList />} />
              <Route path="/CurrentProjects/CurrentProject1" element={< CurrentProject1 />} />
              <Route path="/CurrentProjects/CurrentProject2" element={< CurrentProject2 />} />
              <Route path="/CurrentProjects/CurrentProject3" element={< CurrentProject3 />} />
              <Route path="/CurrentProjects/CurrentProject4" element={< CurrentProject4/>} />
              <Route path="/CurrentProjects/CurrentProject5" element={< CurrentProject5 />} />
              <Route path="/CurrentProjects/CurrentProject6" element={< CurrentProject6 />} />     
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
