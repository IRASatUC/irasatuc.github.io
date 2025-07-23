import ProjectUI from "../../../reusables/ProjectUI/ProjectUI";
import LatexSection from "../../../reusables/LatexSection/LatexSection";
import LatenciesJPG from "./Latencies.jpg";
import DeltaTJPG from "./DeltaT.jpg";
import JumpTJPG from "./JumpT.jpg";
import NeuralNetworksJPG from "./NeuralNetworks.jpg";
import FlowchartJPG from "./Flowchart.jpg";
import ForceModelJPG from "./ForceModel.jpg";
import TrainingLossJPG from "./TrainingLoss.jpg";

const forceMVG = "latex$$\\mathbf{f} = \\mathbf{M}\\mathbf{\\ddot{q}} + \\mathbf{V}\\mathbf{\\dot{q}} + \\mathbf{g} + \\mathbf{f}_clatex$$";
const forceComponents = "latex$$\\begin{align*} \\mathbf{f}&= \\left[f_1, f_2\\right]^T, & \\mathbf{q}&= \\left[q_1, q_2\\right]^T, & \\mathbf{\\dot{q}}&= \\left[\\dot{q}_1, \\dot{q}_2\\right]^T, & \\mathbf{\\ddot{q}}&= \\left[\\ddot{q}_1, \\ddot{q}_2\\right]^T, \\\\ \\mathbf{M}&= \\left[\\begin{array}{cc} m_1 + m_2 & m_2 l \\cos q_2 \\\\ m_2 l \\cos q_2 & m_2 l^2 \\end{array}\\right], & \\mathbf{V}&=\\left[\\begin{array}{cc} c & -m_2 l \\sin q_2 \\dot{q}_2 \\\\ 0 & 0 \\end{array}\\right], & \\mathbf{g}&=\\left[\\begin{array}{c} k q_1 \\\\ m_2 g l \\sin q_2 \\end{array}\\right], & \\mathbf{f}_c&=\\left[\\begin{array}{c} f_c \\\\ 0 \\end{array}\\right], \\end{align*}latex$$";
const fcDefinition = "latex$$f_c = f_n \\left[\\mu_d + \\left(\\mu_s - \\mu_d\\right)e^{-\\left(\\frac{\\left|\\dot{q}_1\\right|}{v_s}\\right)^p} \\right] \\tanh\\left(k_{tanh} \\dot{q}_1\\right) + k_v \\dot{q}_1latex$$";

function Project28_Description() {
    return (
        <div style={{padding: '20px'}}>
            <h1 className="ProjectUI_header pt-0">Physics-Enhanced Deep Learning for Faster-than-Real-Time Prediction of Dynamic Behavior of Space Robotic Systems</h1>

            <h2 className="ProjectUI_header">Motivation and Objectives</h2>
            <p>This AFOSR-funded fundamental research project is to develop a Physics-Enhanced Deep Learning (PEDL) framework
                for faster-than-real-time (near instant) prediction of the dynamic behavior of a complex spacecraft and/or robotic system
                in response to control actions for In-space Servicing, Assembly, and Manufacturing (ISAM or OSAM) operations.
                The considered operation or control action can be a teleoperation command from a human operator, an autonomous command
                from an intrinsic safety response, or extrinsic automated decision maker. The motivation is for the near-instant prediction
                to enhance effectiveness and responsiveness of space platforms to mitigate effects of non-safe situations
                in highly-cluttered environments and human teleoperated space robotic systems in the presence of long latency.
                Many ISAM/OSAM non-safe situations challenge the standard conjunctive assessment for space situational awareness (SSA),
                satellite docking and capturing, debris mitigation services and manufacturing control to limit debris,
                and on-orbit proximity inspection, amongst many other challenges.
                <br /> <br />

                Assuming that we have a high-fidelity and trustable physics-based dynamics model of an on-orbit robotic servicing system
                (including onboard robotic arms) and a client satellite/object, this project aims at the following objectives:
            </p> <br />

            <ol className="list-decimal">
                <li><b>Seek to answer the fundamental question (predictability):
                    Can a Deep Learning (DL) model be trained from a physics-based dynamics model of a complex spacecraft/robot system
                    to accurately represent the physics model for efficient prediction of dynamic behavior of the space system?</b>{" "}
                    This can be further boiled down to a question of whether a deep neural network (DNN) can represent the solution
                    of a large set of nonlinear differential equations which currently must be solved numerically through iterative procedure.
                    The answer to this question will advance our knowledge of the DL and point to a new direction
                    of creating predictive engineering tools (models and algorithms).
                </li>
                <li><b>Investigate the question: How to enhance the DL-based prediction model with prior and already proven knowledge
                    for learning efficiency, prediction accuracy, and model explainability?</b>{" "}
                    The answer will lead to physics-enhanced (i.e., knowledge-enhanced) DL models,
                    taking advantage of both physics-based modeling (natural laws based, transparent, and trustworthy)
                    and DL-based modeling (efficient). Moreover, once the model is trained from known and generative data,
                    there are deployment questions of when and how the model should be updated;
                    such as the unknown instances in the ISAM operation domain.
                </li>
                <li>
                    <b>Investigate the question: How effective, resilient, and robust is the PEDL prediction model for typical application conditions
                    including time horizon, initial/boundary conditions, input noises, parameter uncertainties, and external disturbances
                    to the system?</b>{" "}
                    This will develop or incorporate proven techniques of handling uncertainties into the model architecture and learning process.
                    Investigate prediction confidence and uncertainty bounds. The question of uncertainty analysis for human semantic consumption
                    is an unresolved issue from which recent notions of risk (e.g., threat), safety (e.g., physical distance),
                    and responsiveness of action (e.g., temporal) decisions are of importance for human-machine teleoperation systems.
                </li>
                <li>
                    <b>Answer the question: How to apply the research results from the above three objectives
                    to solve an engineering problem and what benefits we will gain?</b>{" "}
                    This is to apply the research results for a typical space robotic scenario
                    to determine the theoretical aspects of importance for ISAM operations.
                    Finally, we will assume a mission-relevant example scenario to demonstrate the effectiveness and performance
                    of the new PEDL prediction method. One possible example is to capture a tumbling and unknown object
                    (known as noncooperative object) on orbit using a robotic arm operated from a servicing spacecraft.
                    Emerging information fusion techniques will be employed to fuse the complex outputs from the PEDL prediction model
                    into information cues for easy understanding by a human operator or an autonomous operation agent.
                    Performance comparison between the physics-based model and the trained PEDL model will be investigated.
                </li>
            </ol>

            <h2 className="ProjectUI_header">Modeling and Simulation</h2>
            <img src={LatenciesJPG} className="mx-auto" alt="Time latencies in teleoperation of a space robotic system and its physics-model or DL-model based predictions"/>
            <div className="text-center">
                <b>Figure 1.</b> Time latencies in teleoperation of a space robotic system and its physics-model or DL-model based predictions
            </div>
            <img src={DeltaTJPG} className="mx-auto" alt="Prediction of a future behavior must be calculated step by step when using a physics model"/>
            <div className="text-center">
                <b>Figure 2.</b> Prediction of a future behavior must be calculated step by step when using a physics model
            </div>
            <img src={JumpTJPG} className="mx-auto" alt="Prediction of a future behavior can be calculated in one step when using a DNN model"/>
            <div className="text-center">
                <b>Figure 3.</b> Prediction of a future behavior can be calculated in one step when using a DNN model
            </div>

            <h2 className="ProjectUI_header">Deep Learning-based Body Motion Control</h2>
            <img src={NeuralNetworksJPG} className="mx-auto" alt="DL models: (a) MLP training; (b) LSTM training; (c) PINN training; (d) PGNN training"/>
            <div className="text-center">
                <b>Figure 4.</b> DL models: (a) MLP training; (b) LSTM training; (c) PINN training; (d) PGNN training
            </div>
            <img src={FlowchartJPG} className="mx-auto" alt="The training process and application process of the PEDL prediction model"/>
            <div className="text-center">
                <b>Figure 5.</b> The training process and application process of the PEDL prediction model
            </div>

            <h2 className="ProjectUI_header">Simulation Results</h2>
            <img src={ForceModelJPG} className="mx-auto" alt="A 2-DOF cart-pendulum system with highly nonlinear coulomb friction"/>
            <div className="text-center">
                <b>Figure 6.</b> A 2-DOF cart-pendulum system with highly nonlinear coulomb friction
            </div>
            <p>The system's physics model</p>
            <LatexSection input={forceMVG} />
            <p>where</p>
            <LatexSection input={forceComponents} />
            <p>where coulomb friction</p>
            <LatexSection input={fcDefinition} />
            <img src={TrainingLossJPG} className="mx-auto" alt="Loss during the training process for the four different approaches"/>
            <div className="text-center">
                <b>Figure 7.</b> Loss during the training process for the four different approaches
            </div>
        </div>
    )
}

function Project28_Publications() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', width: "100%" }}>
            <ul style={{listStyle: "decimal"}}>
                <li>W. Wiedeman, O. Ma, and J. Dong, “Physics-Enhanced Deep Learning for Instantaneous Dynamic Behavior Prediction of a Space Vehicle Robotic Arm System”, to be published at AIAA SciTech, Jan 12-16, 2026, Orlando, FL.</li>
                <li>Y. Sun, W. Wiedeman, and O. Ma, “Comparative Study of Deep Learning Methods for Predicting the Behavior of a Dynamic System including Coulomb Friction”, to appear in Handbook of Dynamic Data Driven Applications Systems: Volume 4, Springer, 2025.</li>
                <li>Yufeng Sun and Ou Ma, “A Physics-Enhanced Deep Learning Model for Fast Prediction of the Behavior of a Forced Dynamic System”, 5th International Conference on Dynamic Data Driven Applications Systems (DDDAS), 2024, New Brunswick, NJ. </li>
            </ul>
        </div>
    )
}

export default function Project28() {
    return (
        <ProjectUI
            projectDescription={Project28_Description}
            publications={Project28_Publications}
        />
    )
}
