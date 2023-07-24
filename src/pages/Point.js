import { useSelector,useDispatch } from "react-redux";
import {useEffect,useRef} from "react";
import "./Point.css"
import { curAction, highAction,randomAction, startAction} from "../store";
import { Howl } from 'howler';
import warning from "../sounds/warning.wav"
import zero from "../sounds/zero.wav"

import theme from "../sounds/theme.mp3"
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

      if(rand===12){
        const id = setInterval(()=>{
            const sound = new Howl({
                src:warning
            })
            sound.play();
        },2500)
        setTimeout(()=>{
            clearInterval(id)
        },10000)
        

      }
      if(rand === 0){
        
        const ze = new Howl({
            src:zero
        })
        ze.play();
      }
      
      
      

    const score = ()=>{
        setTimeout(()=>{
            disable.current.disabled = false;
            dispatch(curAction.zero())
            dispatch(randomAction.zero())
            dispatch(startAction.disable())
        },1000)
    }

    const start = () => {

        const sound = new Howl({
            src:theme , // Replace with the actual path to your sound file
          });
        
          sound.play();

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