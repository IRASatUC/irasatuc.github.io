import Picture1 from "./Picture1.jpg"
import Picture2 from "./Picture2.jpg"
import video1 from "./video1.mp4"
import ProjectUI from '../../../../reusables/ProjectUI/ProjectUI';

function PriorProject18_Publication() {
    return (
        <ul>
             <li><p>Zhang, Z., Xie, P., and Ma, O., “Bio-inspired Trajectory Generation for UAV Perching Movement Based on Tau Theory”, International Journal of Advanced Robotic Systems, Vol. 11, 2014.</p></li>
             <li><p>Zhang, Z., Zhang, S., Xie, P., and Ma, O., “Bioinspired 4D Trajectory Generation for a UAS Rapid Point-to-Point Movement”. Journal of Bionic Engineering, Vol. 11, No. 1, pp. 72–81, 2014.</p></li>
          </ul>
    )
}


export default function PriorProject18() {
    return (
        <ProjectUI
            Background={video1}
            projectTitle="Design and Control of Unmanned Arial Vehicles"
            projectTeaser=""
            projectImage={[{
                title: "",
                src: Picture1,
            },{
                title: "",
                src: Picture2,
            }]}
            
            publications={PriorProject18_Publication}
        />
    )
}