import SPDM from './SPDM operating.mp4';
import stvf from './stvf.jpg';
import spdm_on_ssrms from './spdm_on_ssrms.jpg';
import ProjectUI from '../../../reusables/ProjectUI/ProjectUI';
function Project19_Publication(){
  return(
          <ul>
            <li>
              <p><strong>Ma, O., Wang J., Misra S., and Liu M.</strong></p>
              <p>On the validation of SPDM task verification facility</p>
              <p>Journal of Robotic Systems, Vol.21, No.5, 2004, pp.219-235</p>
            </li>
            <li>
              <p><strong>Ma, O. and Carr, R.</strong></p>
              <p>Dynamics modelling and simulation of SPDM contact operations, Part II: SPDM handling the IEA battery ORUs</p>
              <p>Proc. 1st IAF Space Robotics Workshop, Saint-Hubert, Quebec, October 1998, pp.173-178</p>
            </li>
          </ul>
  )
}

export default function Project19() {
  return (
    <ProjectUI Background={SPDM} 
      projectTitle="SPDM Task Verification Facility (STVF) - while working for MDA"
      projectTeaser="Development of a Hardware-In-the-Loop (HIL) simulation system for verification of ISS robot SPDM performing the most difficult tasks involving complex contact operations"
      
      projectImage={[{
        title:"",
        src:stvf
      },{
        title:"",
        src:spdm_on_ssrms
      }]}
      publications={Project19_Publication}
    />
  )
}