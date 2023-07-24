import arrow from "../photos/arrow.png"
import "./Arrow.css"

function Arrow(){
    return (
        <div className="arrowdiv">
            <div>
                <h1>Click to Start</h1>
            </div>
            <div >
                <img className="arrow-img" src = {arrow} alt = ""/>
            </div>
        </div>
    )

}
export default Arrow;