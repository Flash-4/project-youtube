import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { add } from "../utils/todoSlice";
const Todolist = ()=>{
    const [value,setValue] = useState('');
    const listValues = useSelector((store)=>store.todoSlice.todoList);
    console.log(listValues);
    const handleChange = (e)=>{
        setValue(e.target.value) 
    }
    
    const dispatch = useDispatch();

    const handleClick = (value)=>{
        dispatch(add(value))
    }

    return(
        <>
            <input type="text" onChange={(e)=>handleChange(e)} value={value}/>
            <button onClick={()=>handleClick(value)}>Add</button>
            
        </>
    )
}
export default Todolist