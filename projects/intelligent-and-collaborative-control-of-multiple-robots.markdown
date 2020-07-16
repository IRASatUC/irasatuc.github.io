---
layout: default
---
<h2 align="center"><b>Intelligent and Collaborative Control of Multiple Robots</b></h2>

|![](/images/projects/collaborative_robots/human_experiment.jpg)|![](/images/projects/collaborative_robots/operation_model.jpg)|

<h2 align="center">Problem Statement</h2>
<p align="justify">
A group of independent agents (e.g., humans and robots) work collaboratively as a distributed system to achieve a common goal without a central control.
</p>

<h2 align="center">Aim</h2>
<p align="justify">
Develop intelligent control strategy for each agent of a group such that the actions of the independent group members make the group collaboratively achieve a common goal effectively and efficiently.
</p>

|![](/images/projects/collaborative_robots/transportation_scenario.jpg)|![](/images/projects/collaborative_robots/transportation_concept.jpg)|

<h2 align="center">Current State of Art</h2>
<p align="justify">
Central control strategies are usually employed to control a group of robots, which requires communication between the central controller and individual robots and thus, has security concern. Decentralized control technologies are being developed.
</p>

<h2 align="center">Approach</h2>
<p align="justify">
Develop intelligent adaptable control strategies for each of the independently controlled robots in the group through reinforcement techniques such as Genetic Fuzzy and Reinforcement Learning algorithms that can learn from practice data (i.e., enabling robot gain knowledge like a human). The assumption is that each robot is unaware of how the other robots will act at any instant but it knows the group’s current state and goal. 
</p>

<h2 align="center">Advantages</h2>
<p align="justify">
Inter-agent communication is not required; easily scalable for a larger problem or more agents; process and even performance unaffected when dropping one or several agents; can be trained under uncertainties for improving robustness.
</p>

<h2 align="center">Applications</h2>
- A group of air and/or land robots working collaboratively to achieve a common goal.
- Multiple robots carry or manipulate a large piece of hardware
- Multiple robots jointly perform an assembly/construction task
- Training for optimal behavioral strategy through simulation 

<h2 align="center">Publications​</h2>
- [Sathyan, A. and Ma, O., “Collaborative Decentralized Control of Multiple Robots Using Genetic Fuzzy Systems”, Robotica, 2019, DOI: 10.1017/S0263574719000353​](https://asmedigitalcollection.asme.org/DSCC/proceedings/DSCC2018/51890/V001T03A002/455557)
- Sathyan, A.; Cohen, K.; and Ma, O.; “Comparison Between Genetic Fuzzy Methodology and Q-Learning for Collaborative Control Design”, International Journal of Artificial Intelligence and Applications, Vol.10, No.2, March 2019.​
- [Sun Y., Barth A. and Ma O., “An Intelligent Approach for a Two-robot Team to Perform a Cooperative Task”, Proceedings of AIAA SciTech, Jan 6-10, 2020, Orlando, FL.](https://arc.aiaa.org/doi/abs/10.2514/6.2020-1116)