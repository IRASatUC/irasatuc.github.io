import './ProfileUI.css'
import Placeholder from "../../components/img/Placeholder_people.png"

export default function ProfileUI(props) {
    const noHover = window.matchMedia("(hover: none)").matches;
    return (
        <div className='prof-container' style={{minHeight:"480px"}}>
            <div className='box' onClick={
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
                <img className='img-box' src={ props.imgUrl || Placeholder } alt="profile-img"/>
                <h2 className='name'>{ props.name }</h2>
                <h3 className='title'>{ props.title }</h3>
                <div className='des'>{ props.description ? props.description() : <div></div> }</div>
            </div>
        </div>
    );
}
