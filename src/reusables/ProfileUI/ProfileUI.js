import React from 'react';
import './ProfileUI.css'




function ProfileUI(props){
    return(
        <div className='prof-container' style={{minHeight:"480px"}}>
            <div className='box'>
                <img className='img-box' src={ props.imgUrl } alt="profile-img"/>
                <h2 className='name'>{ props.name }</h2>
                <h3 className='title'>{ props.title }</h3>
                <div className='des'>{ props.description() }</div>
            </div>
        </div>
    );

}

export default ProfileUI;