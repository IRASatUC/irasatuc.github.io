import "./ProjectUI.css";
const UI_width1={
  width:"40%"
}
const UI_width2={width:"80%"}
export default function ProjectUI(props) {
  function CheckUI_case1(params){
    if(params.length<=1){
      return UI_width2
    }
    return UI_width1
  }
  return (
    <div className='ProjectUI'>
      {props.Background?
      <>
        <video autoPlay muted loop id="myVideo">
          <source src={props.Background} type="video/mp4"></source>
        </video>
        <div className="content" >
          <h1 style={{ fontSize: "30px" }}>{props.projectTitle}</h1>
          <p>{props.projectTeaser}</p>
          <button id="myBtn" onClick={() => console.log("Hi")}>Explore</button>
        </div>
      </>:null
      }
      {props.BackgroundImage?<>
        <img id="myImage" src={props.BackgroundImage} alt=""/>
        <div className="content" >
          <h1 style={{ fontSize: "30px" }}>{props.projectTitle}</h1>
          <p>{props.projectTeaser}</p>
          <button id="myBtn" onClick={() => console.log("Hi")}>Explore</button>
        </div>
      </>:null}
      {props.projectDescription?
        <div className="ProjectUI_description_container">
          <div className="ProjectUI_description">
              {props.projectDescription()}
          </div>
        </div>:null
      }
      {props.projectImage?
        <div className='ProjectUI_img'>
          <h0>{props.projectImageTitle?props.projectImageTitle:""}</h0>
          {props.projectImage.map((imageProps)=>{
              return (
                  <div className="image_content_box" style={CheckUI_case1(props.projectImage)}>
                          <div >
                            {
                              typeof(imageProps.title)==="string"?<p style={{fontSize:'30px',width:"100%",textAlign:"center",color:"white"}}><strong>{imageProps.title}</strong></p>:
                              imageProps.title()
                            }
                            <img src={imageProps.src} style={{ width: "100%", height: "auto" }} alt=""></img>
                          </div>
                  </div>
              )
          })}
        </div>:null
      }

      {props.projectVideo?
      <div className="ProjectUI_vid_container">
        <h0>{props.projectVideoTitle?props.projectVideoTitle:""}</h0>

        <div className='ProjectUI_vid'>
          
            {props.projectVideo.map((vidProps)=>{
                return (
                    <div className="vid_content_box" style={CheckUI_case1(props.projectVideo)}>
                        <div>
                          {
                            typeof(vidProps.title)==="string"?<p style={{fontSize:'30px',width:"100%",textAlign:"center",color:"white"}}><strong>{vidProps.title}</strong></p>:
                            vidProps.title()
                          }
                          <video autoPlay muted loop >
                              <source src={vidProps.src} type="video/mp4"></source>
                          </video>
                        </div>
                    </div>
                    
                ) 
            })}
        </div>
      </div>:null}
      {props.publications?
      <div className='ProjectUI_publication'>
        <h1 style={{display:'flex',justifyContent:"center",width:"100%",fontSize:"30px",fontWeight:"bold"}}>Publications</h1>
        <div style={{display:'flex',justifyContent:"center",width:"100%"}} >
          {props.publications()}
        </div>
      </div>
      :null}
    </div>
  )
}