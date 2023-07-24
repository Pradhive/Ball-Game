import "./Home.css"

import Random from "./Random"
import "./Home.css"
import Arrow from "./Arrow"
import Point from "./Point"

function Home(){
    return (
         <div className = "homediv">
            <div>
                <Random/>
            </div>
            <div>
                <Point/>
            </div>
            <div class>
                <Arrow/>
            </div>
         </div>
    )
}

export default Home;