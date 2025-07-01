import ProjectUI from '../../../reusables/ProjectUI/ProjectUI';
import testbed from './testbed.jpg';
import operation_concept from './operation_concept.jpg'

const headerStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '20px'
};

function Project17() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', width: "100%" }}>
            <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: "30px", width: "100%" }}>Space Robot Control for On-Orbit Servicing</h1>
            <img src={operation_concept} alt="operation concept" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '70%' }} />

            <h2 style={headerStyle}>Challenges</h2>
            <ul style={{ listStyleType: 'disc' }}>
                <li>Not designed for robotic grasping​</li>
                <li>Physical properties unknown​ </li>
                <li>Fast spinning or tumbling​</li>
                <li>High risk with proximity and contact operation​</li>
                <li>Vision alone is insufficient for full estimation​</li>
            </ul>

            <h2 style={headerStyle}>Applications​</h2>
            <ul style={{ listStyleType: 'disc' }}>
                <li>Space situation awareness
                </li>
                <li>Satellite on-orbit services such as refuel, rescue, repair, debris cleanup, etc.
                </li>
            </ul>
        </div>
    )
}

const PriorProject5_publications = () => {
    return (
        <div style={{ padding: '20px' }}>
            <ul style={{listStyleType: "disc"}}>
                <li>
                    Flores-Abad, A.; Ma, O.; Pham, K.; and Ulrich, S.; “A Review of Robotics Technologies for On-Orbit Services”, Progress in Aerospace Science, Vol.68, 2014, pp.1-26.
                </li>
                <li>
                    Flores-Abad, A.; Zhang, L.; Zheng, W.; and Ma, O.; “Optimal Capture of a Tumbling Object in Orbit Using a Space Manipulator”, Journal of Intelligent and Robotic Systems, Vol. 86, Issue 2, 2017, pp 199–211.​
                </li>
                <li>
                    Meng Q., Liang, J.; and Ma, O., “Identification of All the Inertial Parameters of a Non-cooperative Object in Orbit”, Aerospace Science and Technology, Vol. 91, August 2019, pp. 571-582.
                </li>
            </ul>
        </div>
    );
}

export default function PriorProject5() {
    return (
        <ProjectUI
            projectTitle="Intelligent and Collaborative Control of Multiple Robots"
            projectTeaser=""
            projectDescription={Project17}
            projectImage={[{
                title: "",
                src: testbed
            }]}
            publications={PriorProject5_publications}
        />
    )
}
