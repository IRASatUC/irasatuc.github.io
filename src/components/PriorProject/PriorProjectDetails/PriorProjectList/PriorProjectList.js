import "./PriorProjectList.css"
import { PriorProjectList_contents } from "../../../../contents/PriorProjectList_content/PriorProjectList_content"
import { Link } from "react-router-dom"

export default function PriorProjectList() {
    return (
        <div className='PriorProject'>
            <div>
                <h1>Prior Projects</h1>

                <ul>
                    { PriorProjectList_contents.map((content, index) => {
                        return (
                            <li key={index} style={(content.link.length > 0) ? {fontWeight:"bold",cursor:"pointer"} : null} >
                                { (content.link.length > 0) ?
                                    <Link to={content.link}>
                                      {content.text}
                                    </Link> :
                                    <>
                                      {content.text}
                                    </> }
                            </li>
                        )
                    }) }
                </ul>
            </div>
        </div>
    )
}
