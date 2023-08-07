
import { createSlice } from "@reduxjs/toolkit";
const initialState = {todoList:[]}
const todoSlice = createSlice({
    name:"todoSlice",
    initialState,
    reducers:{
        add:(state,payload)=>{
            state.todoList = [...state.todoList,payload.payload]
        }
        
    }

})
 export const{add} = todoSlice.actions;
 export default todoSlice.reducer;