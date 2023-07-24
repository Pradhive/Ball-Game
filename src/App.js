
import { Fragment } from "react";
import Login from "./pages/Login"
import Home from "./pages/Home"
import {  useSelector } from "react-redux";

function App() {


  const login = useSelector((state)=>{

    console.log(state)
    return state.authentication.loginState})

  return (
    <Fragment>
      {!login && <Login/>}
    {login && <Home/>}
    </Fragment>
  );
}

export default App;
