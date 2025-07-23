//import "./PriorProjectList.css"
import { PriorProjectList_contents } from "../../../../contents/PriorProjectList_content/PriorProjectList_content"
import ProjectItem from "../../../../reusables/ProjectItem/ProjectItem"

export default function PriorProjectList() {

    return (
        <div className='PriorProject big_h1 pl-[20px] no-hamburger:pl-[50px] max-w-[1000px]'>
            <div>
                <h1>Prior Projects</h1>
                <ul>
                    { PriorProjectList_contents.map((content, index) => {
                        return (
                            <ProjectItem key={index} content={content} index={index} />
                        )
                    }) }
                </ul>
            </div>
        </div>
    )
}
