import './ProfileUI.css'
import Placeholder from "../../components/img/Placeholder_people.png"

export default function ProfileUI(props){
    return (
        <div className='prof-container' style={{minHeight:"480px"}}>
            <div className='box'>
                <img className='img-box' src={ props.imgUrl || Placeholder } alt="profile-img"/>
                <h2 className='name'>{ props.name }</h2>
                <h3 className='title'>{ props.title }</h3>
                <div className='des'>{ props.description ? props.description() : <div></div> }</div>
            </div>
        </div>
    );
}
