
import ProjectUI from '../../../reusables/ProjectUI/ProjectUI';
import Comparison_controls from "./Comparison_controls.mp4";
import Capturing from './Capturing.mp4';
import Picture1 from "./Picture1.jpg";

function Project16() {
    return (
        <div style={{textAlign:"center"}}>
          <ul style={{textAlign:"left"}}>
              <li>
                  Flores-Abad, A., Zhang, L., Zheng, W., and Ma, O., “Optimal Capture of a Tumbling Object in Orbit Using a Space Manipulator”, <i>Journal of Intelligent and Robotic Systems</i>, Vol. 86, Issue 2, 2017, pp. 199–211.
              </li>
              <li>
                  Flores-Abad, A., Ma, O., Zheng, W., Pham, K., “Optimal Controller for a Space Robot with Uncertainties in the Boundary Conditions”, <i>Journal of Guidance, Control and Dynamics</i>, Vol. 37, No. 6, 2014, pp. 2014-2017.
              </li>
              <li>
                  Liang J. and Ma O., "Angular-velocity tracking with unknown dynamics for satellite rendezvous and docking", <i>Acta Astronautica</i>, Vol. 69, 2011, pp. 1019-1028.
              </li>
          </ul>
      </div>
    )
}

export default function PriorProject14() {
    return (
        <ProjectUI
            Background={Capturing}
            projectTitle="Robot Control for Capturing a Non-cooperative Object​"

            projectImage={[{
              title: "",
              src: Picture1
            }]}

            projectVideo={[{
              title: '',
              src: Comparison_controls
            }]}
            publications={Project16}
        />
    )
}
