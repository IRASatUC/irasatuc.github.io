import Picture1 from './Picture1.jpg';
import Picture2 from './Picture2.jpg'


import ProjectUI from '../../../reusables/ProjectUI/ProjectUI';

function Project21_Publications() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', width: "100%" }}>
             <ul style={{listStyleType:"disc"}}>
        <li>
          Barth, A. and Ma, O., “Study of Hopping Mechanics for Different Terrain Conditions for Hopping on a Low-Gravity Surface”; 
          <em> Proc. of 2021 AIAA Accelerating Space Commerce, Exploration, and New Discovery (ASCEND 2021)</em>, November 15-17, 2021, Las Vegas, NV.
        </li>
        <li>
          Dong, J; Barth, A.; Ma, O., “Development of a Bio-Inspired Hopping Leg for Lunar Exploration Rover”, 
          <em> ASME 2022 International Mechanical Engineering Congress and Exposition (IMECE2022)</em>; Oct. 30-Nov. 3, 2022, Columbus, OH.
        </li>
      </ul>
        </div>
    )
}


export default function Project21() {
    return (
        <ProjectUI
            BackgroundImage={Picture1}
            projectTitle="Bio Inspired Hopping Locomotion for Lunar Exploration"
            projectTeaser="Investigate a new mode of robotic locomotion having advantages over the current wheeled mode for much faster mobility on unstructured lunar surface because of less need to travel around obstacles and gaps on the way."
            projectImage={[{
                title: "",
                src: Picture2,
            }]}
            
            publications={Project21_Publications}
        />
    )
}