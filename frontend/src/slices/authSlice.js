//in this particualr slice we not gonna dealing with any endpoints that will be users api slice this is simpli to set the user credential in local storgae and remove that

import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userInfo:localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')):null
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials:(state,action)=>{ //we hit our backen through user api slice we get our userInfo  and we gonna send here as payload in the action and we wanna set this in local storage

            state.userInfo=action.payload;

            localStorage.setItem('userInfo',JSON.stringify(action.payload))

        },
    },

  
})

export const {setCredentials}=authSlice.actions;

export default authSlice.reducer;