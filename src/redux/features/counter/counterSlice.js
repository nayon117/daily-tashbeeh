import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   subhanallahCount: 0,
   allhamdulillahCount: 0,
   allahakbarCount: 0,
    message:''
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        incrementSubhanallah: (state) =>{
            if(state.subhanallahCount<32){
                state.subhanallahCount += 1
            }else{
                state.subhanallahCount = 0
                state.message='subhanallah tashbeeh completed'
            }
        },
        incrementAlhamdulillah: (state) =>{
            if(state.allhamdulillahCount<32){
                state.allhamdulillahCount += 1
            }else{
                state.allhamdulillahCount = 0
                state.message='alhamdulillah tashbeeh completed'
            }
        },
        incrementAllahAkbar: (state) =>{
            if(state.allahakbarCount<33){
                state.allahakbarCount += 1
            }else{
                state.allahakbarCount = 0
                state.message='allahakbar tashbeeh completed'
            }
        },
        resetMessage: (state) =>{
            state.message=''
        }
    }
})

export const {incrementSubhanallah,incrementAlhamdulillah,incrementAllahAkbar,resetMessage} = counterSlice.actions
export default counterSlice.reducer