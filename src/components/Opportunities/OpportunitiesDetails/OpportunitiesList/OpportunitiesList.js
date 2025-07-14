import { Link } from "react-router-dom"

export default function OpportunitiesList() {
    return (
        <div className='Opportunities big_h1 pl-[20px] no-hamburger:pl-[50px]'>
            <div>
                <h1>Opportunities Available</h1>

                <ul>
                    <li key={0} style={{fontWeight:"bold",cursor:"pointer"}} ><Link to="/Opportunities">
                        1. Intelligent and Collaborative Control of Multi-Robot Team
                    </Link></li>
                </ul>
            </div>
        </div>
    )
}
