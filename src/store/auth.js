import {createSlice} from "@reduxjs/toolkit"


const auth = createSlice({
    name: "auth",
    initialState:{loginState : true},
    reducers:{
        login(state){
            
            state.loginState = true;
        },
        logout(state){
            state.loginState = false;
        }
    }
})

export const authActions  = auth.actions;


export default auth;




