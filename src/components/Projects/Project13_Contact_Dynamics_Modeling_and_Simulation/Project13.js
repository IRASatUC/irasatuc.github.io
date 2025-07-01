
import ProjectUI from '../../../reusables/ProjectUI/ProjectUI';
import video1 from './video1.mp4';
import Picture1 from './Picture1.jpg';
import Picture2 from './Picture2.jpg';

const headerStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '20px'
};

function Project13_Description() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', width: "100%" }}>
            <h1 style={headerStyle}>Contact Dynamics Modeling and Simulation</h1>
            <ul style={{listStyleType:"disc"}}>
                <li>Multi-point and frictional impact-contact with complex geometry</li>
                <li>Model order reduction</li>
                <li>Contact parameters identification</li>
            </ul>
        </div>
    )
}

function Project13_Publications() {
    return (
        <div>
            <ul>
                <li>
                    Liu, Q.; Liang, J.; and Ma, O.; “A physics-based and data-driven hybrid modeling method for accurately simulating complex contact phenomenon”,
                    <em> Multibody System Dynamics (2020)</em>. <a href="https://doi.org/10.1007/s11044-020-09746-w" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/s11044-020-09746-w</a>
                </li>
                <li>
                    Liang, J.; Fillmore, S.; and Ma, O.; “An extended bristle friction force model with experimental validation”,
                    <em> Mechanism and Machine Theory</em>, Vol.56, 2012, pp.123-137.
                </li>
                <li>
                    Ma, O. and Wang, J., “Model order reduction for impact-contact dynamics simulations of flexible manipulators”,
                    <em> Robotica</em>, Vol. 25, 2007, pp.397-407.
                </li>
            </ul>
      </div>
    )
}

export default function Project13() {
    return (
        <ProjectUI
            projectTitle="Contact Dynamics Modeling and Simulation"
            projectTeaser=""
            projectDescription={Project13_Description}

            projectImage={[{
                title: "",
                src: Picture1,
            },{
                title: "",
                src: Picture2,
            }]}

            projectVideo={[{
                title:"",
                src: video1,
            }]}
            Publications={Project13_Publications}
        />
    )
}
