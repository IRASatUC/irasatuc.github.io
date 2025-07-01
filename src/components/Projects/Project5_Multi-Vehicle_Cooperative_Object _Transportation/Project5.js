import ProjectUI from '../../../reusables/ProjectUI/ProjectUI';
import dynamic_model from './dynamic_model.jpg';
import simulation_result from './simulation_result.jpg'
import picture2 from './picture2.jpg';

const headerStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '20px'
};

function Project5_Description() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', width: "100%" }}>
            <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: "30px", width: "100%" }}>Multi-Vehicle Collaboration for Object Transportation</h1>
            
            <h2 style={headerStyle}>Problem Description</h2>
            <ul style={{ listStyleType: 'disc' }}>
                <li>Multiple robots (as a team) jointly transport a large object to a targeted destination.</li>
            </ul>

            <h2 style={headerStyle}>Features and Methods</h2>
            <ul style={{ listStyleType: 'disc' }}>
                <li>No communication among robots.</li>
                <li>No dynamics model nor path planning.</li>
                <li>Decentralized and reinforcement learning based control.</li>
            </ul>
            <img src={dynamic_model} alt="dynamic model" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '70%' }} />

            <h2 style={headerStyle}>Result</h2>
            <ul style={{ listStyleType: 'disc' }}>
                <li>Object delivered by collaboration of two robots with over 96% success rate.</li>
                <li>Robots learned how to evaluate individual’s states and actions.</li>
            </ul>

            <h2 style={headerStyle}>Simulation Interface</h2>
            <img src={picture2} alt="simulation interface" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto',marginBottom:"30px", width: '30%' }} />
            <img src={simulation_result} alt="simulation result" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '70%' }} />

        </div>
    )
}
const Project5_publications = () => {
    return (
        <div >
            <ul style={{ listStyleType: "disc" }}>
                <li>Zhang L, Sun Y, Barth A, Ma O. Decentralized Control of Multi-Robot System in Cooperative Object Transportation Using Deep Reinforcement Learning. IEEE Access. 2020 Sep 21;8:184109-19.​</li>
            </ul>
        </div>
    );
}

export default function Project5() {
    return (
        <ProjectUI
            projectTitle="Intelligent and Collaborative Control of Multiple Robots"
            projectTeaser=""
            projectDescription={Project5_Description}
            publications={Project5_publications}
        />
    )
}
