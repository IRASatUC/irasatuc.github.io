---
layout: default
---
<h2 align="center"><b>Autonomous Mobile Robot for Servicing in Indoor Environments</b></h2>

<h2 align="center">Description</h2>
<p align="justify">
This project aims to develop an autonomous service robot working in indoor environments (such as schools, office buildings, and hospitals) and providing services such as material transportation, room cleaning, disinfection and many other tasks.
The significant challenges include
- self-closing door opening: the robot must be able to autonomously open doors and traverse the doorways so that it can extend its working area to different rooms without human assistance.
- self-charging using standard wall outlets: the robot must be able to autonomously charge its battery using standard wall outlets which are widely available in public indoor environments, so that it can extend its working time without human assistance.
Both are complex tasks which can be divided into three subtasks: 1) object detection; 2) long-range approaching; and 3) close-range manipulation. Instead of using an expensive robotic arm, we are developing a cost-effective device which can be attached to a wheeled robot along with cameras and force sensors for the door-opening task.
</p>
![](/images/projects/door-opening/robot.png "indoor service robot"){:width="100%" .image-center}

<h2 align="center">Methodology</h2>
<p align="justify">
We designed a cost-effective 2-DOF device for performing both door-opening and self-charging tasks, the device contain a motor-driven 2-DOF end-effector for operating door handle and inserting plug into wall outlets, a sidebar for pulling self-closing door open, two PI cameras and an RGBD camera for detecting and estimating the target object (door handles and wall outlets), and two 3-axis loadcells for detecting contact forces.
For object detection task, we collected a dataset containing images of doors, door handles, wall outlets and trained a YOLO v5 model with this dataset, which can be deployed to the robot for real-time detection.
For long-range approaching task, we utilized vision and force sensors' feedback to drive the robot toward the target (door and wall outlet)
For close-range manipulation task, we built a simulation and trained the force-vision sensor-fusion control policy using deep reinforcement learning, finally transferred the simulation-trained control policies to the real-world robot.  
</p>

<h2 align="center">Enable Service Robots to Open Self-Closing Doors</h2>
<p align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/5CGG6vOeOh4?si=tQX7Etv7_HqbwECV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</p>

<h2 align="center">Enable Service Robots to Charge Batteries</h2>
<p align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/BhfFRvom3v4?si=rFktwZH5q7XEfs0q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</p>

<h2 align="center">Publications</h2>
- [Sun, Yufeng, Lin Zhang, and Ou Ma. "Force-Vision Sensor Fusion Improves Learning-based Approach for Self-Closing Door Pulling." IEEE Access (2021).](https://ieeexplore.ieee.org/abstract/document/9562517)
