import ProfileUI from '../../reusables/ProfileUI/ProfileUI';
import { People_contents_faculty, People_contents_students,People_contents_staffs, People_contents_colaborating_faculty_within_UC, People_contents_colaborating_faculty_outside_UC } from '../../contents/People_contents/People_content';

const header_and_source = [
    {
        header: "Faculty",
        source: People_contents_faculty
    }, {
        header: "Collaborating Faculty within UC",
        source: People_contents_colaborating_faculty_within_UC
    }, {
        header: "Collaborating Faculty outside UC",
        source: People_contents_colaborating_faculty_outside_UC
    }, {
        header: "Staff",
        source: People_contents_staffs
    }, {
        header: "Students",
        source: People_contents_students
    }
]

export default function People() {
    return (
        <div className='People px-[20px] no-hamburger:px-[50px]'>
            <div>
                <h1 className="font-bold text-[4em] underline -mt-[1rem] mb-2 text-center no-hamburger:text-left">People</h1>

                <p className="text-center no-hamburger:text-left">{(window.matchMedia("(hover: none)").matches?"Tap":"Hover") + " to expand profiles."}</p>

                <ul>
                    { header_and_source.map((content, index) => {
                        return (
                            <>
                                <li className="text-[2em] p-[5px]" key={index}><strong>{content.header}</strong></li>
                                <div className="flex justify-center no-hamburger:justify-normal w-full h-auto flex-wrap gap-x-[20px]">
                                    { content.source.map((content, index) => {
                                        return (
                                            <ProfileUI key={index} imgUrl={content.imgUrl} title={content.title} name={content.name} description={content.description} />
                                        )
                                    })}
                                </div>
                            </>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
