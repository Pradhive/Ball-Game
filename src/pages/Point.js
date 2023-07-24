import { useSelector,useDispatch } from "react-redux";
import {useEffect,useRef} from "react";
import "./Point.css"
import { curAction, highAction,randomAction, startAction} from "../store";

function Point(){
    const dispatch = useDispatch();
    const disable = useRef();
    const rand = useSelector(state => state.random.random)
    const name = useSelector((state)=>state.username.name)
    const point = useSelector((state) =>state.current.cur)
    const higher = useSelector((state) =>state.high.high)
    useSelector((state) =>state.start.start)

    useEffect(() => {
        if (point > higher) {
          dispatch(highAction.changehigh(point));
        }
      }, [point, higher, dispatch]);

    const score = ()=>{
        setTimeout(()=>{
            disable.current.disabled = false;
            dispatch(curAction.zero())
            dispatch(randomAction.zero())
            dispatch(startAction.disable())
        },1000)
    }

    const start = () => {

        disable.current.disabled = true
        dispatch(startAction.able())

        const int = setInterval(()=>{
            dispatch(randomAction.change())
        },1000)
        setTimeout(()=>{
            score()
            clearInterval(int)
        },60000)
        
    }

    return (
        <div className="side">
            <div className=  "pointname">
            <h1>
                Hi! {name}
            </h1>
            </div>
            <div className = "high">
                <h1>
                    {higher}
                </h1>
                <h3>
                    High Score
                </h3>
            </div>
            <div className = "current">
                <h1>
                    {point}
                </h1>
                <h3>
                    Current Score
                </h3>
            </div>
            <div>
                <h1 className = "time">{rand}</h1>
            </div>

            <div>
                <button ref={disable} onClick={start} className = "restart">Start</button>
            </div> 

            

        </div>
    )
}

export default Point;