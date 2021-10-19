---
layout: default
---
<h2 align="center"><b>Autonomous Mobile Robot for Door Opening</b></h2>

<h2 align="center">Description</h2>
<p align="justify">
This project aims to develop an autonomous service robot working in indoor environments (such as schools, office buildings, and hospitals) and providing services such as material transportation, room cleaning, disinfection and many other tasks. The significant challenge is that the robot must be able to autonomously open doors and traverse the doorways so that they can extend their working area to different rooms without human assistance. The door-opening task is an complex task which can be divided into four essential subtasks: 1) detecting the door handle, which is an object detection problem; 2) approaching the door and the door handle, which is a navigaiton problem; 3) opearating the door handle and unlatching the door, which usually requires a mutil DOF manipulator to interact with the door handle; 4) opening the door and travering the doorway, which relies on the cooperation of the manipulator and the robot for pulling/pushing and holding the door. Instead of using an expensive robotic arm, We are developing a cost-effective device which can be attached to a wheeled robot along with cameras and force sensors for the door-opening task.
</p>

<p align="center">
![](/images/projects/door-opening/door-opening-sim.jpg "Door Opening Simulation"){:width="50%"}
</p>

<h2 align="center">Methodology</h2>
<p align="justify">
In our approach for autonomous door opening, we design a 2-DOF device equipped side bars, cameras, and force sensors, which can is attached to a mobile robot. The robot detects the door handle using a machine leanring method, navigates itself to the door using an RGB-D camera for distance measure, operates the door handle using force sensor feedbacks, and finally opens the door (including self-closing door) using the force-vision fusion based control policy which was trained using a deep reinforcement learning technique.        
</p>

<p align="center">
![](/images/projects/door-opening/door_opening_approach.jpg "Door Opening Approach"){:width="100%"}
</p>

<h2 align="center">Simulation</h2>
<p align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/O_FV47hIRus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>
<h2 align="center">Publications</h2>
- [Sun, Yufeng, Lin Zhang, and Ou Ma. "Force-Vision Sensor Fusion Improves Learning-based Approach for Self-Closing Door Pulling." IEEE Access (2021).](https://ieeexplore.ieee.org/abstract/document/9562517) 
