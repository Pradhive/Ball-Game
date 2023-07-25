import { curAction } from "../store";
import "./Random.css"
import { useDispatch ,useSelector} from "react-redux";
import { Howl } from 'howler';
import coinsound from "../sounds/coin.wav"
import losesound from "../sounds/lose.wav"




function Random(){


    let the = "randomdiv no"
    const button = useSelector((state) => state.start.isStart)

    if (button) {
      the  = "randomdiv"
    }else{
      the = "randomdiv no"
    }
    const dispatch = useDispatch();

    const playsound= ()=>{
      const coin = new Howl({
        src:coinsound
       })
       coin.play()
    }
    const decsound = ()=>{
      const coin = new Howl({
        src:losesound
       })
       coin.play()
    }
   
   const ball1 = () =>{
     dispatch(curAction.plus5())
     playsound()
   }
   const ball2 = () => {
     dispatch(curAction.plus10());
     playsound()
   };
   const ball3 = () => {
     dispatch(curAction.sub5());
     decsound()
   };
   const ball4 = () => {
     dispatch(curAction.sub10());
     decsound()
   };
   const ball5 = () => {
     dispatch(curAction.mul2());
     playsound()
   };
   const ball6 = () => {
    dispatch(curAction.mul3());
    decsound()
  };
  const ball7 = () => {
    dispatch(curAction.div2());
    playsound()
  };
  const ball8 = () => {
    dispatch(curAction.div3());
    playsound()

  };
  const ball9 = () => {
    dispatch(curAction.add50());
    playsound()

  };


    return(
        <div className="hidden">
          <div   className = {the}  >
                  <button onClick={ball1} className = "ball ball1 move-element1 ">+5</button>
                  <button onClick={ball2} className = "ball ball2 move-element2">+10</button>
                  <button onClick={ball3} className = "ball ball3 move-element3">-5</button>
                  <button onClick={ball4} className = "ball ball4 move-element4">-10</button>
                  <button onClick={ball5} className = "ball ball5 move-element5">+2</button>
                  <button onClick={ball6} className = "ball ball6 move-element6">-3</button>
                  <button onClick={ball7} className = "ball ball7 move-element7">*2</button>
                  <button onClick={ball8} className = "ball ball8 move-element8">+3</button>
                  <button onClick={ball9} className = "ball ball8 move-element9 center"><img className="btnlogo" src = "https://adya.ai/Assests/Images/Home/favicon.png" alt = "logo"/></button>
          </div>
        </div>
    )
}

export default Random;