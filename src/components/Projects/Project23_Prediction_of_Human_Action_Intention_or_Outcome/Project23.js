import ProjectUI from '../../../reusables/ProjectUI/ProjectUI';
import Picture1 from './Picture1.jpg';
import Picture2 from './Picture2.jpg'

function Project23_Publications() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', width: "100%" }}>
            <ul>
                <li>
                    Zhang, L., Li, S., Xiong, H., Diao, X. & Ma, O., "An Application of Convolutional Neural Networks on Human Intention Prediction."
                    <em> International Journal of Artificial Intelligence Applications</em>, 10, (2019).
                </li>
                <li>
                    Zhang, L., Diao, X. & Ma, O., "A Preliminary Study on a Robot’s Prediction of Human Intention."
                    <em> The 7th Annual IEEE International Conference on CYBER Technology in Automation, Control, and Intelligent Systems</em>, 1446–1450 (2017).
                </li>
                <li>
                    Li, S., Zhang, L. & Diao, X., "Deep-Learning-Based Human Intention Prediction Using RGB Images and Optical Flow."
                    <em> Journal of Intelligent & Robotic Systems</em>, 1–13 (2019).
                </li>
            </ul>
        </div>
    )
}

function Project23_Description() {
    return(
        <div>
            <h2><strong>Objective:</strong></h2>
            <p>Predict human intention or outcome from visual observation of an initial portion of action.</p>

            <h2><strong>Applications:</strong></h2>
            <ul>
                <li>Human-robot interaction and collaboration</li>
                <li>Accident avoidance</li>
                <li>Athlete training</li>
            </ul>

            <h2><strong>Approach:</strong></h2>
            <p>Apply deep neural networks to learn spatially and temporally hidden features from human action images.</p>
            <p>Establish connections between these hidden features and the intention or outcome of the human actions.</p>
        </div>
    )
}

export default function Project23() {
    return (
        <ProjectUI
            BackgroundImage={Picture1}
            projectTitle="Prediction of Human Action Intention or Outcome"
            projectDescription={Project23_Description}

            projectImage={[{
                title: "",
                src: Picture2,
            }]}
            publications={Project23_Publications}
        />
    )
}
