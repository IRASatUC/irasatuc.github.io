import ProjectUI from '../../../reusables/ProjectUI/ProjectUI';
import LatexSection from "../../../reusables/LatexSection/LatexSection";
import { Link } from "react-router-dom";

import "./Project27.css";
import Project27_high from './SquirrelSim high_angvel.mp4';
import Project27_low from './SquirrelSim low_angvel.mp4';
import Project27_veryhigh from './SquirrelSim veryhigh_angvel.mp4';
import SquirrelExample from "./SquirrelExample.png";
import NetworkDesign from "./NetworkDesign.png";
import JointModel from "./JointModel.png";

const inertial = `latex$$\\large{\\underset{\\mathcal{P}}{\\min}L = \\frac{1}{2} \\text{tr}\\left(\\left(\\mathbf{Q}_{0, T} - \\mathbf{Q}_{\\text{d}}\\right)^{\\text{T}} \\left(\\mathbf{Q}_{0, T} - \\mathbf{Q}_{\\text{d}}\\right)\\right)}latex$$`
const orientation = `latex$\\mathbf{Q}_{\\text{d}} \\in \\text{SO(3)}latex$`;
const fancyP = `latex$\\mathcal{P}latex$`;
const controlPolicy = `latex$\\mathcal{N}\\left(\\mathbf{\\theta} \\: | \\: \\Theta \\right)latex$`;
const loss = `latex$$\\large{L_{\\omega} = \\frac{1}{\\left|\\mathcal{D}\\right|} \\sum \\left(\\left|\\left|\\mathbf{D}_{0,\\mathbf{\\theta}_{\\mathcal{D}}}^{-1}\\left(\\mathbf{Q}_{\\mathcal{D}}^{\\text{T}} \\: \\mathbf{H} - \\mathbf{D}_{\\mathbf{\\theta}_{\\mathcal{D}}}\\dot{\\mathbf{\\theta}}_{\\mathcal{D}}\\right) - \\mathbf{\\omega}_{0, \\mathcal{D}}\\right|\\right|^2 + \\left|\\left|\\underset{n}{\\sum} m_n \\mathbf{r}_n\\right|\\right|^2\\right)}latex$$`;

function Project27_Description() {
    return (
        <div style={{padding: '20px'}}>
            <h1 className="ProjectUI_header">Study of Squirrel’s Capability of Stabilizing Its Head while Body Tumbling</h1>

            <h2 className="ProjectUI_header">Goals and Objectives</h2>
            <p>
                A squirrel exhibits an astonishing ability to stabilize its head—and thus its gaze—toward a fixed point during free fall,
                even while its body tumbles unpredictably after being thrown into the air.
                This remarkable feat of body movement control is vividly demonstrated in the popular YouTube video{" "}
                <a href="https://www.youtube.com/watch?v=hFZFjoX2cGg" target="_blank" >Backyard Squirrel Maze 1.0</a>,
                which has captivated the public with over 138 million views.
            </p> <br />
            <p>
                This fundamental research aims to uncover the principles behind such agile and precise body coordination,
                drawing from dynamics and control theories. By understanding the underlying mechanisms that nature employs,
                we hope to translate these insights into engineering applications—enabling robotic systems
                to replicate this extraordinary capability. 
            </p> <br />
            <img className="m-auto" src={SquirrelExample}
                alt={`Notated examples from "Backyard Squirrel Maze" by Mark Rober, describing the process squirrels use to land safely.`} />

            <h2 className="ProjectUI_header">Modeling and Simulation</h2>
            <p>
                The squirrel is modelled as an articulated multibody system consisting of
                head (body 0), torsos (bodies 1, 3, 6), limbs (bodies 2, 4, 5, 7, 8, 10, 11, and 12) and tail (body 9)
                which are connected by 12 joints. Each joint has either 1 or 2 degrees of freedom (DOFs),
                as shown in the following diagram. Therefore, the multibody system has a total of 20 DOFs. 
            </p> <br />
            <img className="m-auto" src={JointModel}
                alt={`A model of the system described, with a squirrel-shaped body on the left and a more abstract depiction of the joints on the right.`} />

            <h2 className="ProjectUI_header">Machine Learning-based Body Motion Control</h2>
            <p>
                Based on our understanding of a squirrel’s capability for globally stabilizing its head during body tumbling in air,
                we designed a machine learning-based control method to produce similar motion behavior as squirrels do. <br /> <br />
                The control goal is to achieve the head stabilization in an inertial defined as
            </p>
            <div>
                <LatexSection input={inertial} />
            </div>
            <p>
                where{" "}
                    <LatexSection input={orientation} inline />
                {" "}is the desired head orientation and{" "}
                    <LatexSection input={fancyP} inline />
                {" "}is the set of joint coordinates. Joint limites are counted as constraints of the optimization process.
                The loss function for training the MADDPG control policy{" "}
                    <LatexSection input={controlPolicy} inline />
                {" "}is defined as
            </p>
            <div>
                <LatexSection input={loss} />
            </div>
            <p>
                Details can be found in the listed documentation<sup><a href="#ref1" onClick={() => {const ref = document.getElementById('ref1'); ref.style.border='2px solid rgb(128,128,64)'; ref.style.borderRadius="2px"}}>[1]</a></sup>.
            </p> <br />
            <img className="m-auto" src={NetworkDesign}
                alt="A diagram of the neural network used." />
        </div>
    )
}

function Project27_Publications() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', width: "100%" }}>
            <ul>
                <li id="ref1">
                    T. Ma, O. Ma, and T. Zhang, “Global Reorientation of a Free‑Fall Robotic System using Reconstruction Loss‑based Deep Learning Method‑Theory and Comparison,”{" "}
                    <em>Journal of Intelligent & Robotic Systems</em>, Vol. 111, 2025, <Link href="https://doi.org/10.1007/s10846-025-02253-0">doi: 10.1007/s10846-025-02253-0</Link>.
                </li>
                <li>
                    T. Ma, T. Zhang, and O. Ma, “Global reorientation of a free-fall multibody system using periodical joint motions – theory and motion planning”.{" "}
                    <em>Multibody System Dynamics, Vol. 2024</em>. <Link href="https://doi.org/10.1007/s11044-024-10032-2">doi: 10.1007/s11044-024-10032-2</Link>.
                </li>
                <li>
                    T. Ma, T. Zhang, O. Ma, “Global Reorientation of a Free-Fall Multibody System using Reconstruction Loss-based Deep Learning Method”,{" "}
                    <em>IFToMM Symposium of RoManSy & USCToMM Symposium on Mechanical Systems and Robotics</em>, May 23-25, 2024, Tampa, FL.
                </li>
                <li>
                    T. Ma, T. Zhang, O. Ma, “On the dynamics and control of a squirrel locking its head/eyes toward a fixed spot for safe landing while its body is tumbling in air”.{" "}
                    <em>Frontiers on Robotics and AI</em>. 2022, <Link href="https://doi.org/10.3389/frobt.2022.1030601">doi: 10.3389/frobt.2022.1030601</Link>.
                </li>
            </ul>
        </div>
    )
}

export default function Project27() {
    return (
        <ProjectUI
            projectDescription={Project27_Description}
            projectVideoTitle="Simulation Results"
            projectVideo={[{
              title: "High angular velocity",
              src: Project27_high
            }, {
              title: "Low angular velocity",
              src: Project27_low
            }, {
              title: "Very high angular velocity",
              src: Project27_veryhigh
            }]}
            publications={Project27_Publications}
        />
    )
}
