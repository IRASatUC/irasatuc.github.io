---
layout: default
---
<h2 align="center"><b>Optimal Attitude Profiling of A 12U Scientific CubeSat</b></h2>
<h3 align="center">(Industrial project sponsored by Sierra Lobo, Inc.)</h3>
https://www.uc.edu/news/articles/n20944639/uc-aerospace-students-design-custom-satellites-for-science.html

![](/images/projects/cubesat/cubesat.jpg "A 12U scientific cubesat developed by Sierra Lobo for imaging surface temperature"){:width="70%"}

<h2 align="center">Objectives</h2>
Develop an attitude control strategy to minimize the temperature on a cryo-cooled optical sensor while still providing sufficient power generation capability. 

<h2 align="center">Approach​</h2>
Parametric sweeps of potential attitudes are generated over a three-orbit timeframe. Thermal analysis is performed to determine the corresponding spacecraft temperature for each attitude. This temperature along with the solar incidence angle on the solar arrays form a cost function which is minimized for each point in the orbit. An attitude profile is generated from these minimum attitudes using a Fourier curve fitting technique.

<h2 align="center">Advantages​</h2>
Using a Fourier curve fit takes advantage of the periodic, sinusoidal motion of the orbital reference frame and produces a reference trajectory that can be used over many orbits with only a small set of coefficients required to be uplinked to the spacecraft. Following a constantly-changing attitude profile reduces the risk of reaction wheel saturation due to a magnetic torque rod being “fixed” in an orientation parallel to the Earth’s magnetic field and unable to unload the wheel.

<h2 align="center">Result​</h2>
Weighting factors for power and temperature can be tuned to produce the desired temperature profile. Maneuvers to specific attitudes for communication or science objectives are short duration and have minimal impact on temperature. Using a profile generated over three orbits can be extended to longer time frames.

![](/images/projects/cubesat/temperature.jpg "Radiator Temperature"){:width="100%"}

