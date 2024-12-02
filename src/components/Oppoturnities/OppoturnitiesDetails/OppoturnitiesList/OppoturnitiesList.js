import "./OppoturnitiesList.css"
import { Link } from "react-router-dom"
export default function OppoturnitiesList() {

    return (
      <div className='Oppoturnities'>
        <div>

          <h1>Oppoturnities Avaiable</h1>
          <ul>
            <li style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/Oppoturnities">1. Intelligent and Collaborative Control of Multi-Robot Team</Link></li>
           

          </ul>
        </div>
      </div>
    )
  }