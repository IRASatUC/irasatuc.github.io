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
        <div className='ProjectUI text-white'>

            {   (props.Background || props.BackgroundImage) &&
                <>
                    <div className="backgroundContainer max-h-[80vh] overflow-hidden">
                        { props.Background &&
                            <video autoPlay muted loop id="myVideo" className="w-full">
                                <source src={props.Background} type="video/mp4"></source>
                            </video> }

                        { props.BackgroundImage &&
                            <img id="myImage" className="w-full" src={props.BackgroundImage} alt=""/> }
                    </div>
                    <div className="backgroundContainerGradient relative -mt-[200px] h-[200px] pointer-events-none"></div>

                    <div className="content relative -mt-[200px] text-[#f1f1f1] w-full p-[20px] z-[1]">
                        <h1 className="text-[30px]">{props.projectTitle}</h1>
                        <p>{props.projectTeaser}</p>
                        <button id="myBtn" className="w-[200px]text-[18px] p-[10px] border-none bg-black hover:text-black hover:bg-[#ddd]" onClick={() => console.log("Hi")}>Explore</button>
                    </div>
                </>
            }

            { props.projectDescription &&
                <div className="ProjectUI_description_container flex justify-center">
                    <div className="z-[1] ProjectUI_description w-[90%] no-hamburger:w-[80%] border-b-[1px] border-solid border-white p-[10px] min-[900px]:p-[50px]">
                        {props.projectDescription()}
                    </div>
                </div> }

            { props.projectImage &&
                <div className='ProjectUI_img max-[900px]:flex-col max-[900px]:items-center p-[50px] pt-[80px] max-[900px]:p-[20px] max-[900px]:pt-[80px] flex justify-center'>
                    <h1>{props.projectImageTitle?props.projectImageTitle:""}</h1>

                    { props.projectImage.map((imageProps, index)=>{
                        return (
                            <div key={index} className="image_content_box flex flex-col items-center p-[20px]">
                                <div>
                                    {
                                        typeof(imageProps.title) === "string" ?
                                            <p style={{fontSize:'30px',width:"100%",textAlign:"center",color:"white"}}><strong>
                                                {imageProps.title}
                                            </strong></p> :
                                            imageProps.title()
                                    }
                                    <img className="max-h-[40vh] object-contain" src={imageProps.src} alt=""></img>
                                </div>
                            </div>
                        )
                    }) }
                </div> }

            { props.projectVideo &&
                <>
                    <h1 className="ProjectUI_vid_header text-[#f1f1f1] text-center font-bold text-[30px] p-5">{props.projectVideoTitle ? props.projectVideoTitle : ""}</h1>
                    <div className="ProjectUI_vid_container flex justify-center">
                        <div className='ProjectUI_vid flex justify-center max-[900px]:flex-col max-[900px]:items-center max-[900px]:pt-[20px] w-[80%] pt-[20px] border-t-[1px] border-solid border-white'>
                            { props.projectVideo.map((vidProps, index)=>{
                                return (
                                    <div key={index} className="vid_content_box flex flex-1 justify-center p-[20px]">
                                        <div className="flex flex-col w-full">
                                            {
                                                typeof(vidProps.title)==="string" ?
                                                    <p className="text-[20px] no-hamburger:text-[30px] w-full text-center text-white flex-grow-[1] content-center"><strong className="font-[20px]">
                                                        {vidProps.title}
                                                    </strong></p> :
                                                    vidProps.title()
                                            }
                                            <video className="max-h-[40vh] object-contain" autoPlay={!(vidProps.doNotAutoplay)} muted={!(vidProps.doNotAutoplay)} loop={!(vidProps.doNotAutoplay)} controls={vidProps.doNotAutoplay}>
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
              <div className='ProjectUI_publication p-[50px]'>
                    <h1 className="flex justify-center w-full text-[30px]">Publications</h1>

                    <div className="flex justify-center w-full publicationsDiv" >
                        {props.publications()}
                    </div>
              </div> }
        </div>
    )
}
