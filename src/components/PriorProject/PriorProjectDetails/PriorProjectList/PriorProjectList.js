import "./PriorProjectList.css"
import { PriorProjectList_contents } from "../../../../contents/PriorProjectList_content/PriorProjectList_content"
import { Link } from "react-router-dom"
export default function PriorProjectList() {

    return (
      <div className='PriorProject'>
        <div>

          <h1>Prior Projects</h1>
          <ul>
            {
              PriorProjectList_contents.map((content, index) => {
                if (content.link.length > 0 ) {
                  return (
                    <li key={index} style={{fontWeight:"bold",cursor:"pointer"}} >
                      <Link to={content.link}>
                        {content.text}
                      </Link>
                    </li>
                  );
                } else return (
                    <li key={index}>
                      {content.text}
                    </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    )
  }