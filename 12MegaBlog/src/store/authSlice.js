import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userData:null,

}

const authSlice = {
    name:"auth",
    initialState,
    reducers:{
        login:(state, action) => {
            state.status=true;
            state.userData=action.payload.userData;
        },
        logout:(state)=>{
            state.status=false;
            state.status=null;
        }
    }

}
