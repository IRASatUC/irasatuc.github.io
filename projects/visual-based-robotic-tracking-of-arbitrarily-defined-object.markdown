---
layout: default
---
<h2 align="center"><b>Visual-based Robotic Tracking of Arbitrarily defined Object</b></h2>
<h2 align="center">Description</h2>
The ultimate goal of this project is to manipulate arbitrary objects with a robotic manipulator through an on-board vision system. Currently, we are able to track any single object using [PySOT](https://github.com/STVIR/pysot)(an open-sourced software developed by SenseTime Video Intelligence Research Team), which implemented state-of-the-art single object tracking algorithms, including [SiamRPN](https://openaccess.thecvf.com/content_cvpr_2018/html/Li_High_Performance_Visual_CVPR_2018_paper.html) and [SiamMask](https://arxiv.org/abs/1812.05050). Together with an RGB-D camera ([Intel RealSense D435](https://www.intelrealsense.com/depth-camera-d435/)) the 3D pose of the designated object can be calculated thus it can be manipulated by a robotic arm ([KUKA LBR iiwa14 R820](https://www.kuka.com/en-us/products/robotics-systems/industrial-robots/lbr-iiwa)).

<h2 align="center">Workflow</h2>
1. Take a snapshot using the RGB-D camera.
2. Select the interested object from the snapshot.
3. The online object tracking and segmentation algorithm will start working and tracking the designated object in the pixel frame.
4. Convert the 2D position of the designated object to 3D position under the camera frame using the aligned depth camera and the [librealsense SDK](https://github.com/IntelRealSense/librealsense).
5. Transform the 3D position of the object using the robot's frame.

Now, the robot knows where the interested object is located at and manipulation of it becomes possible.

<h2 align="center">Demo</h2>
<p align="justify">
We have two demonstrations using this workflow, but this method can be extended to more advanced applications such as pick-and-place, etc..
<h3 align="center">Poke an Object</h3>
<iframe width="100%" height="480" src="https://www.youtube.com/embed/JrYPYVlJJvg" title="iiwa poke" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h3 align="center">Track an Object</h3>
<iframe width="100%" height="480" src="https://www.youtube.com/embed/ZkNstcOUs8w" title="iiwa track" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>
