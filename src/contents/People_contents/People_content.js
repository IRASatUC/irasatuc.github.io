import Lab_Web_Site_Conrad_Kent from "../Lab Portraits/Lab_Website_Conrad_Kent.jpg"
//import Lab_Web_Site_Andy_Barth from "../Lab Portraits/Lab_Website_Andy_Barth.jpg"
import Lab_Web_Site_Dylan_Roach from "../Lab Portraits/Lab_Website_Dylan_Roach.jpg"
//import Lab_Web_Site_Ethan_Leszcynski from "../Lab Portraits/Lab_Website_Ethan_Leszcynski.jpeg"
import Lab_Web_Site_Gianni_Gaetano from "../Lab Portraits/Lab_Website_Gianni_Gaetano.jpeg"
//import Lab_Web_Site_Justin_Panchula from "../Lab Portraits/Lab_Website_Justin_Panchula.jpg"
//import Lab_Web_Site_Linus_Dombrosky from "../Lab Portraits/Lab_Website_Linus_Dombrosky.JPG"
import Lab_Web_Site_Moshe_Landon from "../Lab Portraits/Lab_Website_Moshe_Landon.jpg"
import Lab_Web_Site_Waite_Weideman from "../Lab Portraits/Lab_Website_Waite_Weideman.jpg"
//import Lab_Web_Site_Yufeng_Sun from "../Lab Portraits/Lab_Website_Yufeng_Sun.jpg"
//import Lab_Web_Site_Jacob_Hoffmann from "../Lab Portraits/Lab_Website_Jacob_Hoffmann.jpeg"
import Lab_Web_Site_Ma_Ou from "../Lab Portraits/Lab_Website_Ma_Ou.jpg"
//import Lab_Web_Site_Kai_Liao from "../Lab Portraits/Lab_Website_Kai_Liao.JPG"
import Lab_Web_Site_Massoud_Rabiee from "../Lab Portraits/Lab_Web_Site_Massoud_Rabiee.jpg"
import Lab_Web_Site_Donghoon_Kim from "../Lab Portraits/Lab_Website_Donghoon_Kim.jpg"
import Lab_Web_Site_Janet_Jiaxiang_Dong from "../Lab Portraits/Lab_Website_Janet_Jiaxiang_Dong.jpg"
import Lab_Web_Site_Kelly_Cohen from "../Lab Portraits/Lab_Website_Kelly_Cohen.jpg"
//import Lab_Web_Site_Akshat_Shah from "../Lab Portraits/Lab_Website_Akshat_Shah.jpeg"
import Lab_Web_Site_Long_Pham from "../Lab Portraits/Lab_Website_Long_pham.jpg"
//import Lab_Wesite_Taha_Momayiz from "../Lab Portraits/Lab_Wesite_Taha_Momayiz.JPEG"
import Lab_Web_Site_Eric_Butcher from "../Lab Portraits/Lab_Web_Site_Eric_Butcher.jpg"
import Lab_Web_Site_Ian_Walker from "../Lab Portraits/Lab_Web_Site_Ian_Walker.jpg"
import Lab_Web_Site_Gerardo_Martinez_Avila from "../Lab Portraits/Lab_Website_Gerardo_Martinez_Avila.jpg"
import Lab_Web_Site_James_Talavage from "../Lab Portraits/Lab_Website_James_Talavage.jpg"
//import Lab_Web_Site_John_Fischer from "../Lab Portraits/Lab_Website_John_Fischer.jpg"
import Lab_Web_Site_Brian_VanFossen from "../Lab Portraits/Lab_Website_Brian_VanFossen.jpg"
import Lab_Web_Site_Jamie_Williams from "../Lab Portraits/Lab_Website_Jamie_Williams.jpeg"
import Lab_Web_Site_Omar_Al_Thehabey from "../Lab Portraits/Lab_Website_Omar_Al_Thehabey.jpg" 
import Lab_Web_Site_John_Radey from "../Lab Portraits/Lab_Web_Site_John_Radey.jpg"
import Lab_Website_Raj_K_Bhatnagar from "../Lab Portraits/Lab_Website_Raj_K_Bhatnagar.jpg"
import Lab_Web_Site_Scott_Nykl from "../Lab Portraits/Lab_Website_Scott_Nykl.jpg"
import Lab_Web_Site_Ethan_Do from "../Lab Portraits/Lab_Web_Site_Ethan_Do.jpg"
import Lab_Web_Site_Grabiel_Wiser from "../Lab Portraits/Lab_Web_Site_Grabiel_Wiser.jpeg"
import Lab_Website_Neal_DAndrea from "../Lab Portraits/Lab_Website_Neal_DAndrea.jpg"
import Lab_Website_Abdou_Wade   from "../Lab Portraits/Lab_Web_Site_Abdou_Wade.jpg"
import Lab_Web_Site_Rongfei_Li  from "../Lab Portraits/Lab_Web_Site_Rongfei_Li.png"
//import Lab_Website_Elina_Bishoyi from "../Lab Portraits/Lab_Website_Elina_Bishoyi.jpg"
import Lab_Web_Site_Xiaodong_Jia from "../Lab Portraits/Lab_Web_Site_Xiaodong_Jia.jpg"
import Lab_Web_Site_Sophia_Yu from "../Lab Portraits/Lab_Web_Site_Sophia_Yu.png"
import Lab_Website_Josh_Wachs from "../Lab Portraits/Lab_Website_Josh_Wachs.PNG"

export const People_contents_faculty = [
    {
        imgUrl: Lab_Web_Site_Ma_Ou,
        name: "Ou Ma",
        title: "PhD & Professor, Lab Director",
        website: "https://researchdirectory.uc.edu/p/maou",
        description: () => {
            return (
                <div>
                    <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                        <strong>Department of Aerospace Engineering, University of Cincinnati  </strong>
                        <br/> 
                        <br/> Research Areas<br />                   

                        - Space Robotics and Autonomy <br />
                        - Machine Learning and Intelligence System<br />
                        - Impact-contact dynamics<br />
                        - Human Robot Interactions and Collaboration<br />

                        <strong>Email: maou@ucmail.uc.edu</strong>
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
        title: "PhD & Professor",
        website: "https://researchdirectory.uc.edu/p/cohenky",
        description: () => {
            return (
                <div>
                    <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                        <strong>Department of Aerospace Engineering, University of Cincinnati</strong><br />
                        <br />                    
                        Research Areas<br />          

                        - Intelligent Systems<br />
                        - Advanced Air Mobility<br />
                        - Unmanned Aerial Vehicles<br />
                        - Fuzzy Logic Systems<br />

                        <strong>Email: Kelly.Cohen@uc.edu</strong>
                    </p>
                    <button style={{width:"100px",height:"auto",padding:"5px",border:"1px solid white",marginTop:"10px"}}><a href="https://researchdirectory.uc.edu/p/cohenky">Personal Website</a></button>
                </div>
            )
        }
    },
    {
        imgUrl: Lab_Web_Site_Donghoon_Kim,
        name: "Donghoon Kim",
        title: "PhD & Associate Professor",
        website: "https://researchdirectory.uc.edu/p/kim3dn",
        description: () => {
            return (
                <div>
                    <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                        <strong>Department of Aerospace Engineering, University of Cincinnati</strong><br />
                        <br/> Research Areas<br />   

                        - Digital Controls<br />
                        - Robotics and Automation<br />
                        - Electric Machines & Drives<br />
                        - Industrial & process control<br />

                        <strong>Email: kim3dn@ucmail.uc.edu</strong>
                    </p>
                    <button style={{width:"100px",height:"auto",padding:"5px",border:"1px solid white",marginTop:"10px"}}><a href="https://researchdirectory.uc.edu/p/kim3dn">Personal Website</a></button>
                </div>
            )
        },
    },
    {
        imgUrl: Lab_Web_Site_Janet_Jiaxiang_Dong,
        name: "Janet Jiaxiang Dong",
        title: "PhD & Professor",
        website: "https://researchdirectory.uc.edu/p/dongjg",
        description: () => {
            return (
                <div>
                    <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                        <strong>Department of Mechanical & Materials Engineering, University of Cincinnati</strong><br />
                        <br/> Research Areas<br />   

                        - Robotic Cell Design and Integration<br />
                        - Autonomous Vehicles and Mobile Robots<br />
                        - Control, Automation, and Manufacturing Technology<br />
                        - Intelligent Robotic Systems <br />

                        <strong>Email: dongjg@ucmail.uc.edu</strong>
                    </p>
                    <button style={{width:"100px",height:"auto",padding:"5px",border:"1px solid white",marginTop:"10px"}}><a href="https://researchdirectory.uc.edu/p/dongjg">Personal Website</a></button>
                </div>
            )
        },
    },
    {
        imgUrl: Lab_Web_Site_Massoud_Rabiee,
        name: "Massoud Rabiee",
        title: "PhD & Professor",
        website: "https://researchdirectory.uc.edu/p/rabieem",
        description: () => {
            return (
                <div>
                    <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                        <strong>Department of Electrical Engineering, University of Cincinnati</strong><br />
                        <br/> Research Areas<br />   
                        
                        - Digital Controls<br />
                        - Robotics and Automation<br />
                        - Electric Machines & Drives<br />
                        - Industrial & Process Control<br />

                        <strong>Email: rabieem@ucmail.uc.edu</strong>
                    </p>
                    <button style={{width:"100px",height:"auto",padding:"5px",border:"1px solid white",marginTop:"10px"}}><a href="https://researchdirectory.uc.edu/p/rabieem">Personal Website</a></button>
                </div>
            )
        },
    },
    {
        imgUrl: Lab_Website_Raj_K_Bhatnagar,
        name: "Raj K. Bhatnagar",
        title: "PhD & Professor",
        website: "https://researchdirectory.uc.edu/p/bhatnark",
        description: () => {
            return (
                <div>
                    <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                        <strong>Department of Computer Science, University of Cincinnati</strong><br />
                        <br/> Research Areas<br />   
                        
                        - Data Mining and Pattern Recognition<br />
                        - Artificial Intelligence<br />
                        - Uncertainty Handling<br />
                        - Algorithms for Bioinformatics<br />

                        <strong>Email: bhatnark@ucmail.uc.edu</strong>
                    </p>
                    <button style={{width:"100px",height:"auto",padding:"5px",border:"1px solid white",marginTop:"10px"}}><a href="https://researchdirectory.uc.edu/p/dongjg">Personal Website</a></button>
                </div>
            )
        },
    },
    {
        imgUrl: Lab_Web_Site_Xiaodong_Jia,
        name: "Xiaodong Jia",
        title: "PhD & Assistant Professor",
        website: "https://researchdirectory.uc.edu/p/jiaxg",
        description: () => {
            return (
                <div>
                    <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                        <strong>Department of Mechanical Engineering, University of Cincinnati</strong><br />
                        <br/> Research Areas<br />   
                        
                        - Smart Manufacturing and Maintenance<br />
                        - Advanced Process Control (APC) and Machine Learning<br />
                        - Data-driven Modeling and Intelligent Systems<br />
                        - Prognostics and Health Management (PHM), and Data Mining<br />

                        <strong>Email: jiaxg@ucmail.uc.edu</strong>
                    </p>
                    <button style={{width:"100px",height:"auto",padding:"5px",border:"1px solid white",marginTop:"10px"}}><a href="https://researchdirectory.uc.edu/p/jiaxg">Personal Website</a></button>
                </div>
            )
        },
    }
];

export const People_contents_colaborating_faculty_outside_UC = [
    {
        imgUrl: Lab_Web_Site_Eric_Butcher,
        name: "Eric Butcher",
        title: "PhD & Professor",
        website: "https://ame.engineering.arizona.edu/faculty-staff/faculty/eric-butcher",
        description: () => {
            return (
                <div>
                    <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                        <strong>Department of Aerospace and Mechanical Engineering, University of Arizona</strong><br />
                        <br/> Research Areas<br />   

                        - Spacecraft Dynamics and Control, and Coulomb Formation Flying<br />
                        - Coupled Orbit/Attitude Dynamics, and Multi-agent Consensus Control<br />
                        - Time-delayed, Stochastic, and Fractional Order Systems<br />

                        <strong>Email: ebutcher@arizona.edu</strong>
                    </p>
                    <button style={{width:"100px",height:"auto",padding:"5px",border:"1px solid white",marginTop:"10px"}}><a href="https://ame.engineering.arizona.edu/faculty-staff/faculty/eric-butcher">Personal Website</a></button>
                </div>
            )
        }
    },
    {
        imgUrl: Lab_Web_Site_Ian_Walker,
        name: "Ian Walker",
        title: "PhD & Professor",
        website: "https://www.uwyo.edu/eecs/faculty-staff/faculty/ian-walker/index.html",
        description: () => {
            return (
                <div>
                    <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                        <strong>Department of Electrical and Computer Engineering & Computer Science, University of Wyoming</strong><br />
                        <br/> Research Areas<br />   

                        - Robotics<br />
                        - Manipulators and Manipulation<br />
                        - Kinematics<br />
                        - Dynamics and control<br />

                        <strong>Email: iwalker2@uwyo.edu</strong>
                    </p>
                    <button style={{width:"100px",height:"auto",padding:"5px",border:"1px solid white",marginTop:"10px"}}><a href="https://www.uwyo.edu/eecs/faculty-staff/ian-walker/index.html">Personal Website</a></button>
                </div>
            )
        },
    },
    {
        imgUrl: Lab_Web_Site_Scott_Nykl,
        name: "Scott L. Nykl",
        title: "PhD & Professor",
        website: "https://www.afit.edu/BIOS/bio.cfm?facID=268",
        description: () => {
            return (
                <div>
                    <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                        <strong>Department of Electrical and Computer Engineering, Air Force Institute of Technology</strong><br />
                        <br/> Research Areas<br />   
                    
                        - Real Time 3D Computer Graphics <br/>
                        - Computer vision, Sensor Fusion, Parallel Processing <br/>
                        - Interactive Virtual Worlds, and computer networking<br /> 

                        <strong>Phone: 937-656-5279</strong>  
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
        title: `IRAS Lab Manager`,
        description: () => {
            return (
                <>
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/> Research Areas<br />   

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
        title: `Senior Research Associate`,
        description: () => {
            return (
                <>
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/> Research Areas<br />   

                    - In Space Service, Assembly, and Manufacturing (ISAM)<br />
                    - Estimation and Tracking of Noncooperative Spacecraft <br />
                    - Hardware-in-the-loop (HIL) simulation technology
                </p>
                </>
            )
        },
    },
    {
        imgUrl: Lab_Web_Site_Rongfei_Li,
        name: "Rongfei Li",
        title: `PhD & Postdoctoral Researcher`,
        description: () => {
            return (
                <>
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/> Research Areas<br />   
                    - Safety Control in HRI/HRC <br />
                    - Intelligent Robotic systems in Industrial Applications<br />
                    - Servoing with Visual and Tactile Fusion<br />
                    - Imitation Learning with Humanoids <br />
                </p>
                </>
            )
        },
    },
    {
        imgUrl: Lab_Web_Site_Grabiel_Wiser,
        name: "Gabriel Wiser",
        title: `SSTI Project Coordinator`,
        /* description: () => {
            return (
                <>
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    - <br />
                    - <br />
                    - 
                </p>
                </>
            )
        },
        */
    }
];

export const People_contents_students = [
    {
        imgUrl: Lab_Web_Site_Dylan_Roach,
        name: "Dylan Roach",
        title: "PHD Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />

                    - Advanced Control Methods<br />
                    - Machine Learning and Computer Vision<br />
                    - GNC and its application to Spacecraft

                </p>
            )
        },
    },

    {
        imgUrl: Lab_Web_Site_Gerardo_Martinez_Avila,
        name: "Gerardo Martinez-Avila",
        title: "PHD Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />

                    - Application of Machine Learning in Space Robotics<br />
                    - Manufacturing/Fabrication in the Space Environment<br />
                    - High Power Directed Energy "Space Lasers"
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
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />
                    - Multibody dynamics and contact dynamics <br />
                    - Robotics Control<br />
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
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />
                    - Physics-enhanced deep learning <br />
                    - Astrodynamics<br />
                    - Flight Trajectory Planning
                </p>
            )
        }
    },
    {
        imgUrl: Lab_Web_Site_John_Radey,
        name: "John Radey",
        title: "PHD Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />
                    - Nonlinear Control of Robotic Systems<br />
                    - Machine Learning for Robot Control<br />
                    - Grasping Control
                </p>
            )
        }
    },

    {
        imgUrl: Lab_Website_Neal_DAndrea,
        name: "Neal D'Andrea",
        title: "PHD Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />
                    - In Space Service, Assembly, and Manufacturing (ISAM) <br />
                    - Imitation Learning <br />
                    - Reinforcement Learning<br />
                </p>
            )
        }
    },

    {
        name: "Iñaki Carrera Bueno",
        title: "PHD Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />
                    - Space Robotics<br />
                    - Motion State Estimation <br />
                    - Spherical Air-bearing Test Facility
                </p>
            )
        }
    },
    {
        imgUrl: Lab_Web_Site_Sophia_Yu,
        name: "Sophia Yu",
        title: "MS Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />
                    - Space Robotics <br />
                    - Reinforcement Learning-based Trajectory Planning <br />
                    - Spacecraft Flight Dynamics and Control
                </p>
            )
        }
    },
    {
        name: "Tiffany Liaw",
        title: "PHD Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />
                    - Bio-inspired Robotics<br />
                    - Human-robot Interaction
                </p>
            )
        }
    },
    {
        imgUrl: Lab_Web_Site_Waite_Weideman,
        name: "Waite Weideman",
        title: "MS Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />

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
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    Research Areas<br />
                    - Autonomous Control<br />
                    - Autonomous Sensing<br />
                    - Aircraft Dynamics

                </p>
            )
        },
    },
*/

/*
    {
        imgUrl: Lab_Web_Site_Linus_Dombrosky,
        name: "Linus Dombrosky",
        title: "Undergraduate Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    Research Areas<br />

                    - Design of Modular Robotic Systems for Space Applications<br />
                    - Remote Operation and Telepresence
                </p>
            )
        },
    },

*/

    {
        imgUrl: Lab_Web_Site_Moshe_Landon,
        name: "Moshe Landon",
        title: "Undergraduate Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />

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
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
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
        title: "Undergraduate and MS Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />

                    - In Space Service, Assembly, and Manufacturing (ISAM)<br />
                    - Spacecraft and Space Robotics Dynamics and Control<br />
                    - Autonomous Systems
                </p>
            )
        },
    },

/*    
    {
        imgUrl: Lab_Web_Site_Akshat_Shah,
        name: "Akshat Shah",
        title: "Undergraduate Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
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
        imgUrl: Lab_Web_Site_Long_Pham,
        name: "Long Pham",
        title: "Undergraduate Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />

                    - In Space Service, Assembly, and Manufacturing (ISAM)<br />
                    - Spacecraft and Space Robotics Dynamics and Control<br />
                    - Autonomous Systems
                </p>
            )
        },
    },

/*
    {
        imgUrl: Lab_Web_Site_John_Fischer,
        name: "John Fischer",
        title: "Undergraduate Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    Research Areas<br />

                    - Space Robotics Dynamics and Control<br />
                    - Satellite Service and Communication
                </p>
            )
        },
    },
*/

    {
        imgUrl: Lab_Web_Site_Jamie_Williams,
        name: "Jamie Williams",
        title: "Undergraduate Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />

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
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
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
        title: "Undergraduate Student",
        description: () => {        
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />
                    - Microrobot Docking Mechanism Design<br />
                    - Robotic Inspection<br />
                    - Micro Robotics
                </p>
            )
        },  
    },

/*
    {
        imgUrl: Lab_Website_Elina_Bishoyi,
        name: "Elina Bishoyi",
        title: "Undergraduate Student",
        description: () => {    
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />
                    - Graphics Modeling<br />
                    - Space Robotics Operations
                </p>
            )
        }
    },
*/

    {
        imgUrl: Lab_Web_Site_Ethan_Do,
        name: "Ethan Do",
        title: "Undergraduate Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />
                    - In Space Service, Assembly, and Manufacturing (ISAM)<br />
                    - Autonomous Systems <br />
                    - 6 DOF Pose Estimation and Tracking<br />
                </p>
            )
        }
    },

    {
        imgUrl: Lab_Website_Abdou_Wade,
        name: "Abdou Wade",
        title: "Undergraduate Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />
                    - In Space Service, Assembly, and Manufacturing (ISAM) <br />
                    - Imitation Learning <br />
                    - Reinforcement Learning<br />
                </p>
            )
        }
    },

    {
        imgUrl: Lab_Website_Josh_Wachs,
        name: "Josh Wachs",
        title: "Undergraduate Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />
                    - In Space Service, Assembly, and Manufacturing (ISAM) <br />
                    - Imitation Learning <br />
                    - Reinforcement Learning<br />
                </p>
            )
        }
    },

    {
        name: "Elizabeth",
        title: "Undergraduate Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />
                </p>
            )
        }
    },

/*
    {
        //imgUrl: Lab_Website_Sabal_Dahal,
        name: "Sabal Dahal",
        title: "Undergraduate Student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "0px" }}>
                    <br/>Research Areas<br />
                    - Computer Vision <br />
                    - Machine Learning<br />
                    - 3D Object State Estimation
                </p>
            )
        }
    }
*/

];
