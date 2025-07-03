import "./CurrentProjectList.css";
import { CurrentProjectList_contents } from "../../../../contents/CurrentProjectList_content/CurrentProjectList_content";
import ProjectItem from "../../../../reusables/ProjectItem/ProjectItem";

export default function CurrentProjectList() {
    return (
        <div className='CurrentProjects'>
            <div>
                <h1>Current Projects</h1>
                <ul>
                    {CurrentProjectList_contents.map((content, index) => {
                        return (
                            <ProjectItem key={index} content={content} index={index} />
                        );
                    })}
                </ul>
          </div>
      </div>
    )
}
