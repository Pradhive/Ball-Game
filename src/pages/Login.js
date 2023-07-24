import "./Login.css"

import { useDispatch } from "react-redux";
import {nameAction} from "../store"
import {authActions} from "../store/auth"
import {useRef} from "react"


function Login(){

    const dispatch = useDispatch();
    const nameinput = useRef();
    const passwordinput = useRef();

    const handlesubmit = (e)=>{
        e.preventDefault();

        if(nameinput.current.value !== "" && passwordinput.current.value !== ""){
            dispatch(
                authActions.login()
            )
            dispatch(
                nameAction.change(nameinput.current.value)
            )
        }
        else{
            alert("Enter Details")
        }

        

    }

    return (

        <div>
            
            
            <div className = "formdiv">
            <div className = "logodiv">
                <img className = "logo" src = "https://adya.ai/Assests/Images/adya_logo_horizontal.png" alt = "Logo"/>
                <h3>Assignment - Pradhive - ReactJs</h3>
            </div>
            <form onSubmit={handlesubmit} id = "form">
                <label>Name</label>
                <input ref = {nameinput} className = "input" placeholder = "Enter Username"/>
                <label>Age</label>
                <input ref ={passwordinput}  className = "input"  placeholder = "Enter your age"/>
                <input className = "inputbtn" type = "submit"/>
            </form>
        </div>
            

        </div>

    )


}

export default Login;