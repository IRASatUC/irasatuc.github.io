
import './People.css';
import ProfileUI from '../../reusables/ProfileUI/ProfileUI';
import { People_contents_falcuty, People_contents_students,People_contents_staffs, People_contents_colaborating_falcuty } from '../../contents/People_contents/People_content';
export default function People() {
    return (
        <div className='People'>
            <div>
                <h1>People</h1>
                
                <ul>
                    <li><strong>Faculty</strong></li>
                    <div style={{display:"flex",width:"100%",height:"auto",flexWrap:"wrap"}}>
                        {People_contents_falcuty.map((content) => {
                            return (
                                <ProfileUI imgUrl={content.imgUrl} title={content.title} name={content.name} description={content.description} />
                            )
                        })}
                    </div>
                    <li><strong>Colaborating Faculty</strong></li>
                    <div style={{display:"flex",width:"100%",height:"auto",flexWrap:"wrap"}}>
                        {People_contents_colaborating_falcuty.map((content) => {
                            return (
                                <ProfileUI imgUrl={content.imgUrl} title={content.title} name={content.name} description={content.description} />
                            )
                        })}
                    </div>
                    <li><strong>Staff</strong></li>
                    <div style={{display:"flex",width:"100%",height:"auto",flexWrap:"wrap"}}>
                        {People_contents_staffs.map((content) => {
                            return (
                                <ProfileUI imgUrl={content.imgUrl} title={content.title} name={content.name} description={content.description} />
                            )
                        })}
                    </div>
                    <li><strong>Students</strong></li>
                    <div style={{display:"flex",width:"100%",height:"auto",flexWrap:"wrap"}}>
                        {People_contents_students.map((content) => {
                            return (
                                <ProfileUI imgUrl={content.imgUrl} title={content.title} name={content.name} description={content.description} />
                            )
                        })}
                    </div>
                    
                </ul>
            </div>
        </div>
    )
}