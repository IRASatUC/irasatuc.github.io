import CurrentProject3_video1 from './CurrentProject3_video1.mp4';
import CurrentProject3_video2 from './CurrentProject3_video2.mp4';
import ProjectUI from '../../../../reusables/ProjectUI/ProjectUI';
function CurrentProject3_Description() {
  return (
    <div style={{  padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold', padding: '20px' }}>Visual-based Robotic Tracking of Arbitrarily Defined Object</h1>

      <h2 style={{ textAlign: 'center', fontWeight: 'bold' , padding: '20px'}}>Description</h2>
      <p>
        The ultimate goal of this project is to manipulate arbitrary objects with a robotic manipulator through an on-board vision system. Currently, we are able to track any single object using PySOT (an open-sourced software developed by SenseTime Video Intelligence Research Team), which implemented state-of-the-art single object tracking algorithms, including SiamRPN and SiamMask. Together with an RGB-D camera (Intel RealSense D435), the 3D pose of the designated object can be calculated thus it can be manipulated by a robotic arm (KUKA LBR iiwa14 R820).
      </p>

      <h2 style={{ textAlign: 'center', fontWeight: 'bold', padding: '20px' }}>Workflow</h2>
      <ul style={{ listStyleType: 'number' }}>
        <li>Take a snapshot using the RGB-D camera.</li>
        <li>Select the interested object from the snapshot.</li>
        <li>The online object tracking and segmentation algorithm will start working and tracking the designated object in the pixel frame.</li>
        <li>Convert the 2D position of the designated object to 3D position under the camera frame using the aligned depth camera and the librealsense SDK.</li>
        <li>Transform the 3D position of the object using the robot’s frame.</li>
        <li>Now, the robot knows where the interested object is located and manipulation of it becomes possible.</li>
      </ul>

      <h2 style={{ textAlign: 'center', fontWeight: 'bold', padding: '20px' }}>Demo</h2>
      <p>
        We have two demonstrations using this workflow, but this method can be extended to more advanced applications such as pick-and-place, etc.
      </p>
    </div>
  )
}
export default function CurrentProject3() {
  return (
    <ProjectUI
      projectDescription={CurrentProject3_Description}
      projectVideo={[{
        title: "Poke an Object",
        src: CurrentProject3_video1
      }, {
        title: "Track an Object",
        src: CurrentProject3_video2
      }]}

    />
  )
}