import './Project15.css';
import ip_2d from "./ip_2d.jpg";
import ip_3d from "./ip_3d.jpg";
import result from "./result.jpg";
import analysis from "./analysis.jpg";

export default function Project15() {
    return (
        <div className='Project15'>
            <img src={analysis} alt="" id="myImage"></img>
            <div className="content">
                <h1 style={{ fontSize: "30px" }}>Risk of Falling Assessment for Older Adults</h1>
                <p>
                    <ul>
                        <li>Motivation: Improve life quality for older adults.</li>
                        <li>Objectives: Extract fall risk indices; quantitatively analyse risk of falling.</li>
                        <li>Method: Gait analysis; biomechanics modeling; machine learning.</li>
                        <li>Contributions: Proposed novel fall risk assessment indices; established machine learning framework for fall risk assessment.</li>
                    </ul>
                </p>
                <button id="myBtn" onClick={() => console.log("Hi")}>Explore</button>
            </div>

            <div className='Project15_img'>
                <img src={ip_2d} style={{ width: "300px", height: "auto" }} alt=""></img>
                <img src={ip_3d} style={{ width: "300px", height: "auto" }} alt=""></img>
                <img src={result} style={{ width: "300px", height: "auto" }} alt=""></img>
            </div>

            <div className='Project15_publication'>
                <h1 style={{ display: 'flex', justifyContent: "center", width: "100%", fontSize: "30px", fontWeight: "bold" }}>Publications</h1>
                <div style={{ display: 'flex', justifyContent: "center", width: "100%" }} >
                    <ul>
                        <li>Zhang L, Ma O, Wood R. A Pilot Study of Dynamic Stability Indices for Potential Application of Identifying Older Adult Fallers. InDynamic Systems and Control Conference 2012 Oct 17 (Vol. 45301, pp. 1-9). American Society of Mechanical Engineers.</li>
                        <li>Zhang L, Ma O, Fabre JM, Wood RH, Garcia SU, Ivey KM, McCann ED. Classification of older adults with/without a fall history using machine learning methods. In2015 37th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC) 2015 Aug 25 (pp. 6760-6763). IEEE.</li>
                        <li>Zhang L, Ma O, Fabre JM, Wood RH. The Motion of Center of Mass: Walking Reveals Difference in Older Adults With and Without Fall History. The International Journal of Aging and Society, Vol.5, No.3, 2015.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
