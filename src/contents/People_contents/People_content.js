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
        title: "Professor",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    - Space Robotics and Autonomy<br />
                    - Machine Learning and Intelligence System<br />
                    - Impact-contact dynamics<br />
                    - Human Robot Interactions and Collaboration

                </p>
            )
        },
    },

];

export const People_contents_staffs = [
    
    {
        imgUrl: Lab_Website_Yufeng_Sun,
        name: "Yufeng (Eric) Sun",
        title: "Research Associate",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Area<br />
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
                     Research Area<br />

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
                    Research Area<br />

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
                    Research Area<br />

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
                    Research Area<br />
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
                    Research Area<br />
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
                    Research Area<br />
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
                    Research Area<br />
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
                    Research Area<br />
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
        title: "Undergraduate student",
        description: () => {
            return (
                <p style={{ textAlign: "left", paddingLeft: "5px" }}>
                    Research Area<br />
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
                    Research Area<br />
                    - In Space Service, Assembly, and Manufacturing (ISAM)<br />
                    - Spacecraft and Space Robotics Dynamics and Control<br />
                    - Autonomous Systems


                </p>
            )
        },
    }
]