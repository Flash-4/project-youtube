import { FaBars } from "react-icons/fa6";
import { FaYoutube} from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa6";
import { FaSistrix } from "react-icons/fa6";
import { FaEllipsisVertical } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/sideBarSlice";
import { useState,useEffect } from "react";
import { SEARCH_SUGGESTION_URL } from "../utils/constants";
 
const Header =()=>{
    const dispatch = useDispatch();
    const toggleSidebar = (name)=>{
        dispatch(toggleMenu(name))
    }
    const [query,setQuery] = useState('');
    const [suggestions,setSuggestions]= useState([]);
    const[showSuggestions,setShowSuggestions] = useState(false);
    const handleChange = (e)=>{
        setQuery(e.target.value);
    }
    useEffect(()=>{
     const timer = setTimeout(()=>{
        getSuggestions();
      },2000);
      return()=>{clearTimeout(timer)}
      
    },[query])
    
    const getSuggestions = async()=>{
        console.log("imin");
        const fetchSuggestions = await fetch(SEARCH_SUGGESTION_URL+query);
        const suggesteData = await fetchSuggestions.json();
        setSuggestions(suggesteData[1]);

    }
    return (
        <header className=" flex  items-center justify-between max-w-7xl m-auto  mt-5">
            <div className=" flex items-center"> 
              <button onClick={()=>toggleSidebar("hi")} className=" mr-3"><FaBars/></button>                             
               <Link to='/'>
                  <button className=" flex gap-1 items-center "><FaYoutube/> YouTube<sup>IN</sup></button>
              </Link>
            </div>

            <div className=" flex w-9/12 justify-center"> 
                <div className="searchSection">
                    <input onFocus={()=>setShowSuggestions(true)} value={query} onChange={(e)=>handleChange(e)} onBlur={()=>setShowSuggestions(false)} className=" w-6/12 rounded-bl-xl rounded-tl-xl border-2 border-inherit bg-slate-50 pl-2" type="text" placeholder="search" />
                    <button className=" rounded-br-xl rounded-tr-xl border-2 border-inherit bg-slate-50 p-1 px-2 border-l-0">
                        <FaSistrix/>
                    </button>
                </div>
                   {showSuggestions && (<div className="suggestions">
                        <ul>
                        {suggestions.map((ele,index)=>{
                            return(
                                <li key={index}>{ele}</li>
                            )
                        })}
                        </ul>
                    </div>)} 
               
                <button className=" mx-4 bg-slate-50  rounded-3xl  p-2">
                    <FaMicrophone/>
                </button>
            </div>

            <div className=" flex">
                <button className=" mr-2">
                   <FaEllipsisVertical/>
                </button>
                <a href="#" className=" flex items-center border-2 border-inherit rounded-3xl p-2 gap-1">
                    <FaRegUser/> Sign in
                </a>
            </div>
        </header>
    )
}
export default Header;