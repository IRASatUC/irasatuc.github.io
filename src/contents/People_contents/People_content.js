import Lab_Web_Site_Conrad_Kent from "../Lab Portraits/Lab_Website_Conrad_Kent.jpg"
//import Lab_Web_Site_Andy_Barth from "../Lab Portraits/Lab_Website_Andy_Barth.jpg"
import Lab_Web_Site_Dylan_Roach from "../Lab Portraits/Lab_Website_Dylan_Roach.jpg"
//import Lab_Web_Site_Ethan_Leszcynski from "../Lab Portraits/Lab_Website_Ethan_Leszcynski.jpeg"
import Lab_Web_Site_Gianni_Gaetano from "../Lab Portraits/Lab_Website_Gianni_Gaetano.jpeg"
//import Lab_Web_Site_Justin_Panchula from "../Lab Portraits/Lab_Website_Justin_Panchula.jpg"
import Lab_Web_Site_Linus_Dombrosky from "../Lab Portraits/Lab_Website_Linus_Dombrosky.JPG"
import Lab_Web_Site_Moshe_Landon from "../Lab Portraits/Lab_Website_Moshe_Landon.jpg"
import Lab_Web_Site_Waite_Weideman from "../Lab Portraits/Lab_Website_Waite_Weideman.jpg"
//import Lab_Web_Site_Yufeng_Sun from "../Lab Portraits/Lab_Website_Yufeng_Sun.jpg"
//import Lab_Web_Site_Jacob_Hoffmann from "../Lab Portraits/Lab_Website_Jacob_Hoffmann.jpeg"
import Lab_Web_Site_Ma_Ou from "../Lab Portraits/Lab_Website_Ma_Ou.jpg"
import Lab_Web_Site_Kai_Liao from "../Lab Portraits/Lab_Website_Kai_Liao.JPG"
import Lab_Web_Site_Massoud_Rabiee from "../Lab Portraits/Lab_Web_Site_Massoud_Rabiee.jpg"
import Lab_Web_Site_Donghoon_Kim from "../Lab Portraits/Lab_Website_Donghoon_Kim.jpg"
import Lab_Web_Site_Janet_Jiaxiang_Dong from "../Lab Portraits/Lab_Website_Janet_Jiaxiang_Dong.jpg"
import Lab_Web_Site_Kelly_Cohen from "../Lab Portraits/Lab_Website_Kelly_Cohen.jpg"
import Lab_Web_Site_Akshat_Shah from "../Lab Portraits/Lab_Website_Akshat_Shah.jpeg"
import Lab_Web_Site_Long_Pham from "../Lab Portraits/Lab_Website_Long_pham.jpg"
//import Lab_Wesite_Taha_Momayiz from "../Lab Portraits/Lab_Wesite_Taha_Momayiz.JPEG"
import Lab_Web_Site_Eric_Butcher from "../Lab Portraits/Lab_Web_Site_Eric_Butcher.jpg"
import Lab_Web_Site_Ian_Walker from "../Lab Portraits/Lab_Web_Site_Ian_Walker.jpg"
import Lab_Web_Site_Gerardo_Martinez_Avila from "../Lab Portraits/Lab_Website_Gerardo_Martinez_Avila.jpg"
import Lab_Web_Site_James_Talavage from "../Lab Portraits/Lab_Website_James_Talavage.jpg"
import Lab_Web_Site_John_Fischer from "../Lab Portraits/Lab_Website_John_Fischer.jpg"
import Lab_Web_Site_Brian_VanFossen from "../Lab Portraits/Lab_Website_Brian_VanFossen.jpg"
import Lab_Web_Site_Jamie_Williams from "../Lab Portraits/Lab_Website_Jamie_Williams.jpeg"
import Lab_Web_Site_Omar_Al_Thehabey from "../Lab Portraits/Lab_Website_Omar_Al_Thehabey.jpg"
import Lab_Web_Site_Raj_Sharma from "../Lab Portraits/Lab_Website_Rajnikant_Sharma.jpg"
import Lab_Web_Site_John_Radey from "../Lab Portraits/Lab_Web_Site_John_Radey.jpg"

export const People_contents_faculty = [
    {
        imgUrl: Lab_Web_Site_Ma_Ou,
        name: "Ou Ma",
        title: "PHD, Lab Director",
        description: () => {
            return (
                <div>
                    <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                        - Space Robotics and Autonomy<br />
                        - Machine Learning and Intelligence System<br />
                        - Impact-contact dynamics<br />
                        - Human Robot Interactions and Collaboration<br />

                        <strong>- Email: maou@ucmail.uc.edu</strong>
                    </p>
                    <button style={{width:"100px",height:"auto",padding:"5px",border:"1px solid white",marginTop:"10px"}}><a href="https://researchdirectory.uc.edu/p/maou">Personal Website</a></button>
                </div>
            )
        },
    },
];

export const People_contents_colaborating_faculty_within_UC = [
/*
    {
        imgUrl: Lab_Web_Site_Andy_Barth,
        name: "Andy Barth",
        title: "Assistant Professor",
        description: () => {
            return (
                <div>
                    <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                        Research Areas<br />

                        - Intelligent Control of Space Manipulators<br />
                        - Spacecraft GNC<br />
                        - High Fidelity Spacecraft Simulations
                    </p>
                </div>
            )
        },
    },
*/
    {
        imgUrl: Lab_Web_Site_Kelly_Cohen,
        name: "Kelly Cohen",
        title: "Professor",
        description: () => {
            return (
                <div>
                    <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                        - Intelligent Systems<br />
                        - Advanced air mobility<br />
                        - Unmanned aerial vehicles<br />
                        - Fuzzy logic systems<br />

                        <strong>- Email: Kelly.Cohen@uc.edu</strong>
                    </p>
                    <button style={{width:"100px",height:"auto",padding:"5px",border:"1px solid white",marginTop:"10px"}}><a href="https://researchdirectory.uc.edu/p/cohenky">Personal Website</a></button>
                </div>
            )
        }
    },
    {
        imgUrl: Lab_Web_Site_Donghoon_Kim,
        name: "Donghoon Kim",
        title: "Assistant Professor",
        description: () => {
            return (
                <div>
                    <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                        - Digital controls<br />
                        - robotics and automation<br />
                        - electric machines & drives, industrial & process control<br />
                        - industrial & process control<br />

                        <strong>- Phone: (513)556 5305</strong>
                    </p>
                    <button style={{width:"100px",height:"auto",padding:"5px",border:"1px solid white",marginTop:"10px"}}><a href="https://researchdirectory.uc.edu/p/kim3dn">Personal Website</a></button>
                </div>
            )
        },
    },
    {
        imgUrl: Lab_Web_Site_Janet_Jiaxiang_Dong,
        name: "Janet Jiaxiang Dong",
        title: "Professor",
        description: () => {
            return (
                <div>
                    <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                        - Robotic cell design and integration<br />
                        - Autonomous vehicles and mobile robots, and intelligent robotic systems<br />
                        - Control and automation<br />
                        - Manufacturing Technology<br />

                        <strong>- Email: dongjg@ucmail.uc.edu</strong>
                    </p>
                    <button style={{width:"100px",height:"auto",padding:"5px",border:"1px solid white",marginTop:"10px"}}><a href="https://researchdirectory.uc.edu/p/dongjg">Personal Website</a></button>
                </div>
            )
        },
    },
    {
        imgUrl: Lab_Web_Site_Massoud_Rabiee,
        name: "Massoud Rabiee",
        title: "Professor",
        description: () => {
            return (
                <div>
                    <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                        - Digital controls<br />
                        - robotics and automation<br />
                        - electric machines & drives, industrial & process control<br />
                        - industrial & process control<br />

                        <strong>- Email: rabieem@ucmail.uc.edu</strong>
                    </p>
                    <button style={{width:"100px",height:"auto",padding:"5px",border:"1px solid white",marginTop:"10px"}}><a href="https://researchdirectory.uc.edu/p/rabieem">Personal Website</a></button>
                </div>
            )
        },
    }
];

export const People_contents_colaborating_faculty_outside_UC = [
    {
        imgUrl: Lab_Web_Site_Eric_Butcher,
        name: "Eric Butcher",
        title: "Professor",
        description: () => {
            return (
                <div>
                    <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                        - Spacecraft dynamics and control<br />
                        - Coupled orbit/attitude dynamics<br />
                        - Time-delayed, stochastic, and fractional order systems<br />
                        - Multi-agent consensus control<br />
                        - Coulomb formation flying<br />

                        <strong>- Email: ebutcher@arizona.edu</strong>
                    </p>
                    <button style={{width:"100px",height:"auto",padding:"5px",border:"1px solid white",marginTop:"10px"}}><a href="https://ame.engineering.arizona.edu/faculty-staff/faculty/eric-butcher">Personal Website</a></button>
                </div>
            )
        }
    },
    {
        imgUrl: Lab_Web_Site_Ian_Walker,
        name: "Ian Walker",
        title: "Professor",
        description: () => {
            return (
                <div>
                    <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                        - Robotics<br />
                        - Manipulators and Manipulation<br />
                        - Kinematics<br />
                        - Dynamics and control<br />

                        <strong>- Email: iwalker2@uwyo.edu</strong>
                    </p>
                    <button style={{width:"100px",height:"auto",padding:"5px",border:"1px solid white",marginTop:"10px"}}><a href="https://www.uwyo.edu/eecs/faculty-staff/ian-walker/index.html">Personal Website</a></button>
                </div>
            )
        },
    },
    {
        imgUrl: Lab_Web_Site_Raj_Sharma,
        name: "Rajnikant Sharma",
        title: "Associate Professor",
        description: () => {
            return (
                <div>
                    <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                        - Collaborative Guidance Navigation and Control<br />
                        - Secure and Trustworthy Autonomous Vehicles<br />
                        - Close proximity sensing for space vehicles<br />
                    </p>
                    <button style={{width:"100px",height:"auto",padding:"5px",border:"1px solid white",marginTop:"10px"}}><a href="https://www.afit.edu/BIOS/bio.cfm?facID=2070">Personal Website</a></button>
                </div>
            )
        },
    }
];

export const People_contents_staffs = [

    {
        imgUrl: Lab_Web_Site_Brian_VanFossen,
        name: "Brian Van Fossen",
        title: `Senior Research Associate`,
        description: () => {
            return (
                <>
                <p className="text-center p-[5px] font-bold -mt-[10px] no-hamburger:-mt-[15px] text-[10px]">SSTI Lab Engineer</p>
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Areas<br />

                    - In Space Service, Assembly, and Manufacturing (ISAM)<br />
                    - Hardware integration with real-time control<br />
                    - Design of Modular Robotic Systems for Space Applications
                </p>
                </>
            )
        },
    },
    {
        imgUrl: Lab_Web_Site_Conrad_Kent,
        name: "Conrad Kent",
        title: `IRAS Lab Manager`,
        description: () => {
            return (
                <>
                <p className="text-center p-[5px] font-bold -mt-[10px] no-hamburger:-mt-[15px] text-[10px]">SSTI Project Coordinator</p>
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                     Research Areas<br />

                    - In Space Service, Assembly, and Manufacturing (ISAM)<br />
                    - Estimation and Tracking of Noncooperative Spacecraft <br />
                    - Haptics and Telepresence
                </p>
                </>
            )
        },
    }
];

export const People_contents_students = [
    {
        imgUrl: Lab_Web_Site_Dylan_Roach,
        name: "Dylan Roach",
        title: "PHD Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Areas<br />

                    - Advanced Control Methods<br />
                    - Machine Learning and Computer Vision<br />
                    - GNC and its application to Spacecraft

                </p>
            )
        },
    },
    {
        imgUrl: Lab_Web_Site_Kai_Liao,
        name: "Kai Liao",
        title: "PHD Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Areas<br />

                    - Infrastructure construction<br />
                    - Maintenance systems for space assets<br />
                    - Interplanetary inhabitants
                </p>
            )
        }
    },
    {
        imgUrl: Lab_Web_Site_Gerardo_Martinez_Avila,
        name: "Gerardo Martinez-Avila",
        title: "PHD Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Areas<br />

                    - Application of machine learning in space robotics<br />
                    - Manufacturing/fabrication in the space environment<br />
                    - High power directed energy "space lasers"
                </p>
            )
        }
    },
    {
        imgUrl: Lab_Web_Site_James_Talavage,
        name: "James Talavage",
        title: "PHD Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Areas<br />

                    - Controls<br />
                    - Space robotics<br />
                    - Biomechanics
                </p>
            )
        }
    },
    {
        imgUrl: Lab_Web_Site_Omar_Al_Thehabey,
        name: "Omar Al-Thehabey",
        title: "PHD Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Areas<br />

                    - Astrodynamics<br />
                    - Flight Trajectory Planning
                </p>
            )
        }
    },
    {
        imgUrl: Lab_Web_Site_John_Radey,
        name: "John Radey",
        title: "PHD Student"
    },
    {
        name: "Neal D'Andrea",
        title: "PHD Student"
    },
    {
        name: "Iñaki Carrera Bueno",
        title: "PHD Student"
    },
    {
        imgUrl: Lab_Web_Site_Waite_Weideman,
        name: "Waite Weideman",
        title: "Master Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Areas<br />

                    - Deep Learning<br />
                    - Flight Dynamics and Control<br />
                    - Space Robotics
                </p>
            )
        },
    },
/*
    {
        imgUrl: Lab_Web_Site_Justin_Panchula,
        name: "Justin Panchula",
        title: "Master Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Areas<br />
                    - Autonomous Control<br />
                    - Autonomous Sensing<br />
                    - Aircraft Dynamics

                </p>
            )
        },
    },
*/
    {
        imgUrl: Lab_Web_Site_Linus_Dombrosky,
        name: "Linus Dombrosky",
        title: "Undergraduate Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Areas<br />

                    - Design of Modular Robotic Systems for Space Applications<br />
                    - Remote Operation and Telepresence
                </p>
            )
        },
    },
    {
        imgUrl: Lab_Web_Site_Moshe_Landon,
        name: "Moshe Landon",
        title: "Undergraduate Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Areas<br />

                    - Theoretical Physics<br />
                    - Robotics<br />
                    - AI, Algorithms, and Software
                </p>
            )
        },
    },
/*
    {
        imgUrl: Lab_Web_Site_Ethan_Leszcynski,
        name: "Ethan Leszcynski",
        title: "Undergraduate/M.Eng",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Areas<br />

                    - Space Vehicle Robotics<br />
                    - Turbomachinery<br />
                    - Control Systems
                </p>
            )
        },
    },
*/
    {
        imgUrl: Lab_Web_Site_Gianni_Gaetano,
        name: "Gianni Gaetano",
        title: "Undergraduate Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Areas<br />

                    - In Space Service, Assembly, and Manufacturing (ISAM)<br />
                    - Spacecraft and Space Robotics Dynamics and Control<br />
                    - Autonomous Systems
                </p>
            )
        },
    },
    {
        imgUrl: Lab_Web_Site_Akshat_Shah,
        name: "Akshat Shah",
        title: "Undergraduate Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Areas<br />

                    - In Space Service, Assembly, and Manufacturing (ISAM)<br />
                    - Spacecraft and Space Robotics Dynamics and Control<br />
                    - Autonomous Systems
                </p>
            )
        },
    },
    {
        imgUrl: Lab_Web_Site_Long_Pham,
        name: "Long Pham",
        title: "Undergraduate Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Areas<br />

                    - In Space Service, Assembly, and Manufacturing (ISAM)<br />
                    - Spacecraft and Space Robotics Dynamics and Control<br />
                    - Autonomous Systems
                </p>
            )
        },
    },
    {
        imgUrl: Lab_Web_Site_John_Fischer,
        name: "John Fischer",
        title: "Undergraduate Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Areas<br />

                    - Space Robotics Dynamics and Control<br />
                    - Satellite Service and Communication
                </p>
            )
        },
    },
    {
        imgUrl: Lab_Web_Site_Jamie_Williams,
        name: "Jamie Williams",
        title: "Undergraduate Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Areas<br />

                    - In Space Service, Assembly, and Manufacturing (ISAM)<br />
                    - Autonomous Systems and Embedded Hardware<br />
                    - Human-Robot Interaction and Collaboration
                </p>
            )
        },
    },
/*
    {
        imgUrl: Lab_Wesite_Taha_Momayiz,
        name: "Taha Momayiz",
        title: "Undergraduate Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Areas<br />
                    - In Space Service, Assembly, and Manufacturing (ISAM)<br />
                    - Spacecraft and Space Robotics Dynamics and Control<br />
                    - Autonomous Systems


                </p>
            )
        },
    },
*/
    {
        name: "Jake Williams",
        title: "Undergraduate Student"
    },
    {
        name: "Elina Bishoyi",
        title: "Undergraduate Student"
    },
];
