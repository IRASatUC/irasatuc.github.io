import Prior_Project6_video1 from "./Prior_Project6_video1.mp4";
import ProjectUI from '../../../reusables/ProjectUI/ProjectUI';

const headerStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '20px'
};

function Project4_Description() {
    return (
        <div>
            <h1 style={{...headerStyle,fontSize: "30px"}}>Multi-Agent Pursuit and Evasion</h1>
            <section>
                <h2 style={headerStyle}>Problem Definition</h2>
                <p>
                    A team of agents pursues an evader who moves arbitrarily. The pursuers seek to capture the evader without collision with teammates and environment, while the evader tries to escape from the pursuers.
                </p>
            </section>
            <section>
                <h2 style={headerStyle}>Features and Methods</h2>
                <ul>
                    <li>No peer communication and dynamics models</li>
                    <li>Decentralized decision making</li>
                    <li>Agents learn through interactions with other agents and the environment</li>
                    <li>Reinforcement learning</li>
                </ul>
            </section>
            <section>
                <h2 style={headerStyle}>Result</h2>
                <p>
                    Captured one evader whose motion was pre-defined. Agents learned achieving the goal with consideration of safety constraints. Learned control policy is robust against uncertainties.
                </p>
            </section>
        </div>
    )
}


export default function Project4() {
    return (
        <ProjectUI
            projectTitle="Intelligent and Collaborative Control of Multiple Robots"
            projectTeaser=""
            projectDescription={Project4_Description}
            projectVideo={[{
                title: "Simulation",
                src: Prior_Project6_video1
            }]}
        />
    )
}
