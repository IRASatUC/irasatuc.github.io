import Lab_Website_Conrad_Kent from "../Lab Portraits/Lab_Website_Conrad_Kent.jpg"
import Lab_Website_Andy_Barth from "../Lab Portraits/Lab_Website_Andy_Barth.jpg"
import Lab_Website_Dylan_Roach from "../Lab Portraits/Lab_Website_Dylan_Roach.jpg"
import Lab_Website_Ethan_Leszcynski from "../Lab Portraits/Lab_Website_Ethan_Leszcynski.jpeg"
import Lab_Website_Gianni_Gaetano from "../Lab Portraits/Lab_Website_Gianni_Gaetano.jpeg"
import Lab_Website_Justin_Panchula from "../Lab Portraits/Lab_Website_Justin_Panchula.jpg"
import Lab_Website_Linus_Dombrosky from "../Lab Portraits/Lab_Website_Linus_Dombrosky.JPG"
import Lab_Website_Moshe_Landon from "../Lab Portraits/Lab_Website_Moshe_Landon.jpg"
import Lab_Website_Waite_Weideman from "../Lab Portraits/Lab_Website_Waite_Weideman.jpeg"
import Lab_Website_Yufeng_Sun from "../Lab Portraits/Lab_Website_Yufeng_Sun.jpg"
import Lab_Website_Jacob_Hoffmann from "../Lab Portraits/Lab_Website_Jacob_Hoffmann.jpeg"
import Lab_Website_Ma_Ou from "../Lab Portraits/Lab_Website_Ma_Ou.jpg"
import Lab_Website_Kai_Liao from "../Lab Portraits/Lab_Website_Kai_Liao.JPG"
export const People_contents_falcuty = [
    {
        imgUrl: Lab_Website_Ma_Ou,
        name: "Ma Ou",
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

export const People_contents_staffs = [
    
    {
        imgUrl: Lab_Website_Yufeng_Sun,
        name: "Yufeng (Eric) Sun",
        title: "PHD, Research Associate",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Areas<br />
                    - Intelligence Robotics<br />
                    - Machine Learning<br />
                    - Dynamics and Control
                </p>
            )
        }
    },
    {
        imgUrl: Lab_Website_Conrad_Kent,
        name: "Conrad Kent",
        title: `IRAS Lab Manager`,
        description: () => {
            return (
                <>
                <p style={{ textAlign:"center",padding:"5px",fontWeight:"bold",marginTop:"-15px",fontSize:"10px" }}>SSTI Project Coordinator</p>
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
        imgUrl: Lab_Website_Andy_Barth,
        name: "Andy Barth",
        title: "PHD student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Areas<br />

                    - Intelligent Control of Space Manipulators<br />

                    - Spacecraft GNC<br />

                    - High Fidelity Spacecraft Simulations

                </p>
            )
        },
    },
    {
        imgUrl: Lab_Website_Dylan_Roach,
        name: "Dylan Roach",
        title: "PHD student",
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
        imgUrl: Lab_Website_Kai_Liao,
        name: "Kai Liao",
        title: "PHD student",
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
        imgUrl: Lab_Website_Waite_Weideman,
        name: "Waite Weideman",
        title: "Master student",
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
    {
        imgUrl: Lab_Website_Justin_Panchula,
        name: "Justin Panchula",
        title: "Master student",
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
    {
        imgUrl: Lab_Website_Linus_Dombrosky,
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
        imgUrl: Lab_Website_Moshe_Landon,
        name: "Moshe Landon",
        title: "Undergraduate student",
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
    {
        imgUrl: Lab_Website_Ethan_Leszcynski,
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
    {
        imgUrl: Lab_Website_Gianni_Gaetano,
        name: "Gianni Gaetano",
        title: "Undergraduate student",
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
    }
]