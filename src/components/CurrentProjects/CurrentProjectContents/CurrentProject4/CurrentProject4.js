import CurrentProject4_video1 from './CurrentProject4_video1.mp4';
import big_idea_icon from "./big_idea_icon.jpg"
import ProjectUI from '../../../../reusables/ProjectUI/ProjectUI';
function CurrentProject4_Description() {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", border: "1px solid white" }}>
                <div style={{ textAlign: "center", borderRight: "1px solid white", padding: "15px" }}>
                    <strong>Student-Led Project proposed to NASA BIG Idea Challenge</strong>
                </div>
                <div style={{ padding: "15px" }}>
                    <img src={big_idea_icon} alt="BIG Idea Challenge Logo"></img>
                </div>
            </div>
            <div style={{ padding: '20px' }}>
                <h1 style={{ fontWeight: 'bold', textAlign: "center" }}>CableCat: Powering the PSR</h1>
                <h2 style={{ textAlign: "center" }}>Objectives & Technical Approach</h2>
                <ul style={{ listStyleType: "disc" }}>
                    <li style={{ textAlign: "start" }}>Establish power infrastructure to the Permanently Shadowed Regions (PSRs) on the lunar surface of scientific interest.</li>
                    <li style={{ textAlign: "start" }}>Enable new missions of science robots operating within a PSR by providing a power supply station to allow the robots be 100% self-sufficient.</li>
                    <li style={{ textAlign: "start" }}>Develop an autonomous 2-wheeled spool (rover) to navigate into the desired a PSR, unspooling the power/data cable.</li>
                    <li style={{ textAlign: "start" }}>Design the spool such that it guarantees always in right posture while traveling on uncertain terrain.</li>
                </ul>
            </div>
            <div style={{  padding: '20px' }}>
                <h2 style={{fontWeight:"bold",textAlign:"center"}}>Team</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                    <tbody>
                        <tr>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Team Lead</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Andrew Barth (PhD Student)</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Mechanical Design</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Changchun Wu, Jiaqi Wang, Junming Shan, Qiyong Yang</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lunar Environment</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tim Hammer, Michael Saxer</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control, Stabilization</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prithev Govindasamy Srinivasan</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prototype Construction</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Caleb Bisig</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cable Design</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Trent Gatz</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Navigation & Mapping</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>William Kelly, Michael Burgess, Daniel Shircliff</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cameras</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Selena Laikos, Vincent Iskander</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Faculty Advisors</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dr. Ou Ma, Dr. Janet Dong, Dr. Shaaban Abdallah</td>
                        </tr>
                    </tbody>
                </table>

                <h2 style={{fontWeight:"bold",textAlign:"center"}}>Project Status</h2>
                <ul style={{listStyleType:"disc"}}>
                    <li>Completed system design and analysis</li>
                    <li>Completed a ready-to-build design</li>
                    <li>Prototype work on hold due to COVID-19 shutdown</li>
                </ul>
            </div>
        </div>
    )
}

export default function CurrentProject4() {
    return (
        <ProjectUI
            projectTitle="Intelligent and Collaborative Control of Multiple Robots"
            projectTeaser=""
            projectDescription={CurrentProject4_Description}
            projectVideo={[{
                title: "",
                src: CurrentProject4_video1
            }]}

        />
    )
}