import "./ProjectUI.css";
import { useEffect } from 'react'

export default function ProjectUI(props) {
    useEffect(() => {
            document.body.style.backgroundColor = 'rgb(55,66,91)';
            return () => {
                document.body.style.backgroundColor = 'initial';
            };
        }
    );

    return (
        <div className='ProjectUI'>

            {   (props.Background || props.BackgroundImage) &&
                <>
                    <div className="backgroundContainer max-h-[80vh] overflow-hidden">
                        { props.Background &&
                            <video autoPlay muted loop id="myVideo" className="w-full">
                                <source src={props.Background} type="video/mp4"></source>
                            </video> }

                        { props.BackgroundImage &&
                            <img id="myImage" className="cover" src={props.BackgroundImage} alt=""/> }
                    </div>
                    <div className="backgroundContainerGradient relative -mt-[200px] h-[200px] pointer-events-none"></div>

                    <div className="content">
                        <h1 style={{fontSize: "30px"}}>{props.projectTitle}</h1>
                        <p>{props.projectTeaser}</p>
                        <button id="myBtn" onClick={() => console.log("Hi")}>Explore</button>
                    </div>
                </> }

            { props.projectDescription &&
                <div className="ProjectUI_description_container">
                    <div className="ProjectUI_description">
                        {props.projectDescription()}
                    </div>
                </div> }

            { props.projectImage &&
                <div className='ProjectUI_img'>
                    <h1>{props.projectImageTitle?props.projectImageTitle:""}</h1>

                    { props.projectImage.map((imageProps, index)=>{
                        return (
                            <div key={index} className="image_content_box" style={{width: ((props.projectImage || "").length <= 1) ? "80%" : "40%"}}>
                                <div>
                                    {
                                        typeof(imageProps.title) === "string" ?
                                            <p style={{fontSize:'30px',width:"100%",textAlign:"center",color:"white"}}><strong>
                                                {imageProps.title}
                                            </strong></p> :
                                            imageProps.title()
                                    }
                                    <img src={imageProps.src} style={{width: "100%", height: "auto"}} alt=""></img>
                                </div>
                            </div>
                        )
                    }) }
                </div> }

            { props.projectVideo &&
                <>
                    <h1 className="ProjectUI_vid_header">{props.projectVideoTitle ? props.projectVideoTitle : ""}</h1>
                    <div className="ProjectUI_vid_container">
                        <div className='ProjectUI_vid'>
                            { props.projectVideo.map((vidProps, index)=>{
                                return (
                                    <div key={index} className="vid_content_box" style={{width: ((props.projectImage || "").length <= 1) ? "80%" : "40%"}}>
                                        <div>
                                            {
                                                typeof(vidProps.title)==="string" ?
                                                    <p style={{fontSize:'30px',width:"100%",textAlign:"center",color:"white"}}><strong>
                                                        {vidProps.title}
                                                    </strong></p> :
                                                    vidProps.title()
                                            }
                                            <video autoPlay={!(vidProps.doNotAutoplay)} muted={!(vidProps.doNotAutoplay)} loop={!(vidProps.doNotAutoplay)} controls={vidProps.doNotAutoplay}>
                                                <source src={vidProps.src} type="video/mp4"></source>
                                                {
                                                    typeof(vidProps.caption)==="string" && <track label="English" kind="subtitles" srcLang="en" src={vidProps.caption} default />
                                                }
                                            </video>
                                        </div>
                                    </div>
                                )
                            }) }
                        </div>
                    </div>
                </> }

            { props.publications &&
              <div className='ProjectUI_publication'>
                    <h1 style={{display:'flex',justifyContent:"center",width:"100%",fontSize:"30px",fontWeight:"bold"}}>Publications</h1>

                    <div style={{display:'flex',justifyContent:"center",width:"100%"}} >
                        {props.publications()}
                    </div>
              </div> }
        </div>
    )
}
