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
function paginations(routes) {

  switch (routes) {
    case 'About':
      return <About />
      break;
    case 'News':
      return <News />
      break;
    case 'PriorProject':
      return <PriorProject />
      break;
    case 'CurrentProjects':
      return <CurrentProjects />
      break;
    case 'People':
      return <People />
      break;
    case 'Publication':
      return <Publication />
      break;
    default:
      return <About />
  }
}
function App() {
  const [routes, setRoutes] = useState('About');

  useEffect(() => {
    const desiredRoute = window.location.href.split("/").pop();
    setRoutes(desiredRoute);
    console.log(routes, desiredRoute);
  }, [routes]);
  return (
    <div className="App">

      <div onClick={async () => {
        const desiredRoute = await window.location.href.split("/").pop()
        setRoutes(desiredRoute);
      }
      }>
        <Nav />
      </div>
      {
        paginations(routes)
      }    </div>
  );
}

export default App;
