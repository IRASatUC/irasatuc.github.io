import { Link } from "react-router-dom";
import { useDeviceSize } from "../../utils/WindowStates";
import Placeholder from "../../components/img/Placeholder_200x200.png";
import "./ProjectItem.css";

export default function ProjectItem({content, index}) {
    content.image = content.image || Placeholder;
    content.link = content.link || "";
    let thisText = String(index + 1) + ". " + content.text;

    const media = 
        <div className="projectItemMedia w-[var(--totalThumbSize)] h-[var(--totalThumbSize)]">
            <div className="imgBord absolute p-[calc(var(--totalThumbSize)_/_2)] transition-[padding,_border] duration-300 ease-linear"></div>
            { (content.video === undefined) ?
                <img className="absolute top-[50%] -translate-y-[50%] w-[var(--finalImgSize)] h-[var(--finalImgSize)] ml-[var(--finalBordSize)]" src={content.image} alt={content.imageAlt || "Placeholder"} /> :
                <video className="absolute top-[50%] -translate-y-[50%] w-[var(--finalImgSize)] h-[var(--finalImgSize)]  ml-[var(--finalBordSize)]" autoPlay loop muted playsInline poster={content.image}>
                    <source src={content.video} type="video/mp4" />
                </video> }
        </div>;

    const windowWidth = useDeviceSize()[0];

    return (
        <>
            { (index > 0) &&
                <hr className="border-black my-[5px] max-w-[95vw] mx-auto"></hr>
            }
            <li key={index} className={"projectItem relative text-[large] p-[5px] flex items-center gap-x-[10px] max-w-[95vw] mx-auto " + ((windowWidth>1042)?"":"smallThumbs ") + ((content.link.length>0)?"font-bold cursor-pointer":"")}>
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