import './People.css';
import ProfileUI from '../../reusables/ProfileUI/ProfileUI';
import { People_contents_falcuty, People_contents_students,People_contents_staffs, People_contents_colaborating_falcuty_within_UC,People_contents_colaborating_falcuty_outside_UC } from '../../contents/People_contents/People_content';

export default function People() {
    return (
        <div className='People'>
            <div>
                <h1>People</h1>

                <ul>
                    <li key={0}><strong>Faculty</strong></li>
                    <div style={{display:"flex",width:"100%",height:"auto",flexWrap:"wrap",columnGap:"20px"}}>
                        { People_contents_falcuty.map((content, index) => {
                            return (
                                <ProfileUI key={index} imgUrl={content.imgUrl} title={content.title} name={content.name} description={content.description} />
                            )
                        }) }
                    </div>

                    <li key={1}><strong>Collaborating Faculty within UC</strong></li>
                    <div style={{display:"flex",width:"100%",height:"auto",flexWrap:"wrap",columnGap:"20px"}}>
                        { People_contents_colaborating_falcuty_within_UC.map((content, index) => {
                            return (
                                <ProfileUI key={index} imgUrl={content.imgUrl} title={content.title} name={content.name} description={content.description} />
                            )
                        }) }
                    </div>

                    <li key={2}><strong>Collaborating Faculty outside UC</strong></li>
                    <div style={{display:"flex",width:"100%",height:"auto",flexWrap:"wrap",columnGap:"20px"}}>
                        { People_contents_colaborating_falcuty_outside_UC.map((content, index) => {
                            return (
                                <ProfileUI key={index} imgUrl={content.imgUrl} title={content.title} name={content.name} description={content.description} />
                            )
                        }) }
                    </div>

                    <li key={3}><strong>Staff</strong></li>
                    <div style={{display:"flex",width:"100%",height:"auto",flexWrap:"wrap",columnGap:"20px"}}>
                        { People_contents_staffs.map((content, index) => {
                            return (
                                <ProfileUI key={index} imgUrl={content.imgUrl} title={content.title} name={content.name} description={content.description} />
                            )
                        }) }
                    </div>

                    <li key={4}><strong>Students</strong></li>
                    <div style={{display:"flex",width:"100%",height:"auto",flexWrap:"wrap",columnGap:"20px"}}>
                        { People_contents_students.map((content, index) => {
                            return (
                                <ProfileUI key={index} imgUrl={content.imgUrl} title={content.title} name={content.name} description={content.description} />
                            )
                        }) }
                    </div>
                </ul>
            </div>
        </div>
    )
}
