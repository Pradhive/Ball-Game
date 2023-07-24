import {createSlice,configureStore} from "@reduxjs/toolkit"
import auth from "./auth"



const name = createSlice({
    name: "name",
    initialState: {name : ""},
    reducers :{
        change(state,action){
            state.name = action.payload
        }
    }
})

export const nameAction = name.actions;


const random = createSlice({
    name: "random",
    initialState: {random : 60},
    reducers :{
        change(state){
            state.random -= 1 
        },
        zero(state){
            state.random = 60
        }
    }
})

export const randomAction = random.actions;

const high = createSlice({
    name : "high",
    initialState : {high : 0},
    reducers : {
        changehigh(state,action){
            state.high = action.payload
        }
    }
})

export const highAction = high.actions

const cur = createSlice({
    name : "cur",
    initialState : {cur : 0},
    reducers : {
        zero(state){
            state.cur = 0
        },
        plus5(state){
            state.cur += 5
        },
        plus10(state){
            state.cur += 10
        },
        sub5(state){
            state.cur -= 5
        },
        sub10(state){
            state.cur -= 10
        },
        mul2(state){
            state.cur += 2
        },
        mul3(state){
            state.cur -= 3
        },
        div2(state){
            state.cur *= 2
        },
        div3(state){
            state.cur += 3
        },
        add50(state){
            state.cur += 50
        }
    }
})

export const curAction = cur.actions

const start = createSlice({
    name : "start",
    initialState : {isStart : false},
    reducers : {
        able(state){
            state.isStart = true;
        },
        disable(state){
            state.isStart = false;
        }
    }

})

export const startAction = start.actions; 

const store = configureStore({
    reducer:{
        authentication:auth.reducer,
        username:name.reducer,
        current:cur.reducer,
        high:high.reducer,
        random:random.reducer,
        start :start.reducer
    }
})

export default store;