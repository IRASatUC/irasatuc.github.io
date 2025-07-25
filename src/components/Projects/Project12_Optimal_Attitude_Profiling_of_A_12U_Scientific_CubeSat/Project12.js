import ProjectUI from '../../../reusables/ProjectUI/ProjectUI';
import cubesat from './cubesat.jpg';
import temperature from './temperature.jpg';

const headerStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '20px'
};

function Project12_Description() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', width: "100%" }}>
            <h1 style={{...headerStyle,fontSize:"30px"}}>Optimal Attitude Profiling of A 12U Scientific CubeSat</h1>
            <p style={{...headerStyle,fontSize:"20px"}}>(Industrial project sponsored by Sierra Lobo, Inc.)</p>
            <a style={headerStyle} href="https://www.uc.edu/news/articles/n20944639/uc-aerospace-students-design-custom-satellites-for-science.html" target="_blank" rel="noopener noreferrer">
                https://www.uc.edu/news/articles/n20944639/uc-aerospace-students-design-custom-satellites-for-science.html
            </a>
            <img src={cubesat} alt="cubesat" style={{ width: '60%', padding: '20px',marginLeft:"auto",marginRight:"auto" }} />

            <section>
                <h2 style={headerStyle}>Objectives</h2>
                <p>Develop an attitude control strategy to minimize the temperature on a cryo-cooled optical sensor while still providing sufficient power generation capability.</p>
            </section>
            <section>
                <h2 style={headerStyle}>Approach</h2>
                <p>Parametric sweeps of potential attitudes are generated over a three-orbit timeframe. Thermal analysis is performed to determine the corresponding spacecraft temperature for each attitude. This temperature along with the solar incidence angle on the solar arrays form a cost function which is minimized for each point in the orbit. An attitude profile is generated from these minimum attitudes using a Fourier curve fitting technique.</p>
            </section>
            <section>
                <h2 style={headerStyle}>Advantages</h2>
                <p>Using a Fourier curve fit takes advantage of the periodic, sinusoidal motion of the orbital reference frame and produces a reference trajectory that can be used over many orbits with only a small set of coefficients required to be uplinked to the spacecraft. Following a constantly-changing attitude profile reduces the risk of reaction wheel saturation due to a magnetic torque rod being “fixed” in an orientation parallel to the Earth’s magnetic field and unable to unload the wheel.</p>
            </section>
            <section>
                <h2 style={headerStyle}>Result</h2>
                <p>Weighting factors for power and temperature can be tuned to produce the desired temperature profile. Maneuvers to specific attitudes for communication or science objectives are short duration and have minimal impact on temperature. Using a profile generated over three orbits can be extended to longer time frames.</p>
            </section>
            <img src={temperature} alt="" style={{ width: '60%', padding: '20px',marginLeft:"auto",marginRight:"auto" }} />
        </div>
    )
}

const Project12_publications = () => {
    return (
        <div style={{ padding: '20px' }}>
            <ul>
                <li>
                    Barth, A.; Ma, O.; Putman, P.; Walker, A., “Determining an optimal attitude profile for thermal management of a remote sensing cubesat”; Proc. of 2021 AIAA Accelerating Space Commerce, Exploration, and New Discovery (ASCEND 2021), November 15-17, 2021, Las Vegas, NV.
                </li>
            </ul>
        </div>
    );
}

export default function Project12() {
    return (
        <ProjectUI
            projectTitle="Robotics Assisted 3D Scanning of Aircraft for Reverse Engineering and Inspection"
            projectTeaser=""
            projectDescription={Project12_Description}
            publications={Project12_publications}
        />
    )
}
