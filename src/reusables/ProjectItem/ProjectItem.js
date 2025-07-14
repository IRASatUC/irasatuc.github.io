import { Link } from "react-router-dom";
import Placeholder from "../../components/img/Placeholder_200x200.png";
import "./ProjectItem.css";

export default function ProjectItem({content, index}) {
    content.image = content.image || Placeholder;
    content.link = content.link || "";

    const media = null /*
        <div className="projectItemMedia">
            <div className="imgBord absolute duration-300 ease-linear"></div>
            { (content.video === undefined) ?
                <img className="absolute" src={content.image} alt="Placeholder" /> :
                <video className="relative top-[50%] -translate-y-[50%]" autoPlay loop muted playsInline poster={content.image}>
                    <source src={content.video} type="video/mp4" />
                </video> }
        </div>;*/

    return (
        <li key={index} className="projectItem relative text-[large] p-[5px]" style={(content.link.length > 0) ? {fontWeight:"bold",cursor:"pointer",display:"flex",columnGap:"10px"}
                                : {display:"flex",columnGap:"10px"}} >
            { (content.link.length > 0) ?
                <>
                    <Link to={content.link}>
                        {media}
                    </Link>
                    <Link to={content.link}>
                        {content.text}
                    </Link>
                </> :
                <>
                    <div>{media}</div>
                    <div>{content.text}</div>
                </> }
        </li>
    );
}