import { Link } from "react-router-dom";
import { useDeviceSize } from "../../utils/WindowStates";
import Placeholder from "../../components/img/Placeholder_200x200.png";
import "./ProjectItem.css";

export default function ProjectItem({content, index}) {
    content.image = content.image || Placeholder;
    content.link = content.link || "";
    let thisText = String(index + 1) + ". " + content.text;

    const media = null /*
        <div className="projectItemMedia">
            <div className="imgBord absolute duration-300 ease-linear"></div>
            { (content.video === undefined) ?
                <img className="absolute" src={content.image} alt={content.imageAlt || "Placeholder"} /> :
                <video className="relative top-[50%] -translate-y-[50%]" autoPlay loop muted playsInline poster={content.image}>
                    <source src={content.video} type="video/mp4" />
                </video> }
        </div>;*/

    const windowWidth = useDeviceSize()[0];

    return (
        <>
            { (index > 0) &&
                <hr className="border-black my-[5px]"></hr>
            }
            <li key={index} className={"projectItem relative text-[large] p-[5px] flex items-center gap-x-[10px] " + ((windowWidth>1042)?"":"smallThumbs ") + ((content.link.length>0)?"font-bold cursor-pointer":"")}>
                { (content.link.length > 0) ?
                    <>
                        <Link to={content.link}>
                            {media}
                        </Link>
                        <Link to={content.link}>
                            {thisText}
                        </Link>
                    </> :
                    <>
                        <div>{media}</div>
                        <div>{thisText}</div>
                    </> }
            </li>
        </>
    );
}