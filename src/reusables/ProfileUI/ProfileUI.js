import './ProfileUI.css'
import Placeholder from "../../components/img/Placeholder_people.png"

export default function ProfileUI(props) {
    const noHover = window.matchMedia("(hover: none)").matches;
    return (
        <div className='prof-container m-[10px] pt-[80px] w-fit' style={{minHeight:"480px"}}>
            <div className='box w-[250px] rounded-[5px] text-white text-center duration-[0.3s]' onClick={
                    noHover ?
                        (e)=>{
                            if (!(e.target instanceof HTMLButtonElement)) {
                                let cl = e.target.closest(".box").classList;
                                (cl.contains("ProfileMobileTouched")) ?
                                    cl.remove("ProfileMobileTouched") :
                                    cl.add("ProfileMobileTouched")
                            }
                        } :
                    null}>
                <img className='img-box relative -top-[80px] h-[190px] w-[190px] rounded-[6px] bg-black mx-auto' src={ props.imgUrl || Placeholder } alt="profile-img"/>
                <h2 className='name -mt-[75px] text-[27px]'>{ props.name }</h2>
                <h3 className='title text-[20px] text-[rgba(255,255,255,0.7)] p-[5px]'>{ props.title }</h3>
                <div className='des text-[10px] text-[rgba(255,255,255,0.7)] pl-[0px] pr-[10px] min-h-[15px] max-h-[15px] opacity-0 invisible duration-[0.3s]'>{ props.description ? props.description() : <div></div> }</div>
            </div>
        </div>
    );
}
