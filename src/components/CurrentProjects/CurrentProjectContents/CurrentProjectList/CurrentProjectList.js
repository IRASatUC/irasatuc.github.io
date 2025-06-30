import "./CurrentProjectList.css";
import { CurrentProjectList_contents } from "../../../../contents/CurrentProjectList_content/CurrentProjectList_content";
import { BrowserRouter, Routes, Route,Outlet,Link } from "react-router-dom";

export default function CurrentProjectList() {
    return (
        <div className='CurrentProjects'>
            <div>
                <h1>Current Projects</h1>
                <ul>
                    {CurrentProjectList_contents.map((content, index) => {
                        return (
                            <li key={index} style={{fontWeight:"bold",cursor:"pointer",display:"flex",columnGap:"10px"}} >
                                <Link to={content.link}>
                                    <div style={{width:"210px",height:"210px"}}>
                                        <div className="imgBord"></div>
                                        {
                                            (content.video === undefined)
                                                ? <img src={content.image} alt="bowser" />
                                                : <video width="200" height="200" autoPlay loop muted playsInline poster={content.image}>
                                                    <source src={content.video} type="video/mp4" />
                                                    Bowser
                                                </video>
                                        }
                                    </div>
                                </Link>
                                <Link to={content.link} style={{paddingTop:"80px"}}>
                                    {content.text}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
          </div>
      </div>
    )
  }