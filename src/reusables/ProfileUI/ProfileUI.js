import './ProfileUI.css'
import Placeholder from "../../components/img/Placeholder_people.png"

export default function ProfileUI(props) {
    const noHover = window.matchMedia("(hover: none)").matches;
    return (
        <div className='prof-container m-[10px] pt-[60px] no-hamburger:pt-[80px] w-fit min-h-[350px] no-hamburger:min-h-[480px]'>
            <div className='box w-[150px] no-hamburger:w-[250px] rounded-[5px] text-white text-center duration-[0.3s] transition-[padding,_max-height]' onClick={
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
                <img className='img-box relative -top-[30px] no-hamburger:-top-[80px] w-[100px] no-hamburger:w-[190px] aspect-square rounded-[6px] bg-black mx-auto' src={ props.imgUrl || Placeholder } alt="profile-img"/>
                <h2 className='name -mt-[25px] no-hamburger:-mt-[75px] text-[18px] no-hamburger:text-[27px]'>{ props.name }</h2>
                <h3 className='title text-[16px] no-hamburger:text-[20px] text-[rgba(255,255,255,0.7)] p-[5px]'>{ props.title }</h3>
                <div className='des text-[9px] no-hamburger:text-[10px] text-[rgba(255,255,255,0.7)] pl-[0px] pr-[10px] min-h-[15px] max-h-[15px] opacity-0 invisible duration-[0.3s]'>{ props.description ? props.description() : <div></div> }</div>
            </div>
        </div>
    );
}
