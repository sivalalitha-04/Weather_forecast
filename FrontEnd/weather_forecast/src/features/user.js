import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:'email',
    initialState:{value:{email:''}},
    reducers:{
        login:(state,action)=>{
            state.value=action.payload
        },
        logout:(state)=>{
            state.value={value:{name:'',email:''}}
        }
        
    }
});
export const {login,logout}=userSlice.actions;
export default userSlice.reducer;