import CurrentProject2_video1 from './CurrentProject2_video1.mp4';
import CurrentProject2_video2 from './CurrentProject2_video2.mp4';
import human_experiment from './human_experiment.jpg';
import operation_model from './operation_model.jpg'
import ProjectUI from '../../../../reusables/ProjectUI/ProjectUI';
const headerStyle = {
  textAlign: 'center',
  fontWeight: 'bold',
  padding: '20px'
};
function CurrentProject2_Description(){
  return(
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px',width:"100%" }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold',fontSize:"30px",width:"100%"}}>Intelligent and Collaborative Control of Multiple Robots</h1>
      
      <h2 style={headerStyle}>Problem Statement</h2>
      <p>
        A group of independent agents (e.g., humans and robots) work collaboratively as a distributed system to achieve a common goal without a central control.
      </p>

      <h2 style={headerStyle}>Goal</h2>
      <p>
        Develop intelligent control strategy for each agent of a group such that the actions of the independent group members make the group collaboratively achieve a common goal effectively and efficiently.
      </p>

      <h2 style={headerStyle}>Current State of Art</h2>
      <p>
        Central control strategies are usually employed to control a group of robots, which requires communication between the central controller and individual robots and thus, has security concern. Decentralized control technologies are being developed.
      </p>

      <h2 style={headerStyle}>Approach</h2>
      <p>
        Develop intelligent adaptable control strategies for each of the independently controlled robots in the group through reinforcement techniques such as Genetic Fuzzy and Reinforcement Learning algorithms that can learn from practice data (i.e., enabling robot gain knowledge like a human). The assumption is that each robot is unaware of how the other robots will act at any instant but it knows the group’s current state and goal.
      </p>

      <h2 style={headerStyle}>Advantages</h2>
      <p>
        Inter-agent communication is not required; easily scalable for a larger problem or more agents; process and even performance unaffected when dropping one or several agents; can be trained under uncertainties for improving robustness.
      </p>

      <h2 style={headerStyle}>Applications</h2>
      <ul style={{ listStyleType: 'disc' }}>
        <li>A group of air and/or land robots working collaboratively to achieve a common goal.</li>
        <li>Multiple robots carry or manipulate a large piece of hardware</li>
        <li>Multiple robots jointly perform an assembly/construction task</li>
        <li>Training for optimal behavioral strategy through simulation</li>
      </ul>
    </div>
  )
}
export default function CurrentProject2() {
  return (
    <ProjectUI 
      Background={CurrentProject2_video1} 
      projectTitle="Intelligent and Collaborative Control of Multiple Robots"
      projectTeaser=""
      projectDescription={CurrentProject2_Description}
      projectImage={[{
        title:"",
        src:human_experiment
      },{
        title:"",
        src:operation_model
      }]}
      projectVideo={[{
        title:"",
        src:CurrentProject2_video1
      },{
        title:"",
        src:CurrentProject2_video2
      }]}

    />
  )
}