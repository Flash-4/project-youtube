import { FaBars, FaYoutube, FaMicrophone, FaSistrix, FaEllipsisVertical, FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/sideBarSlice";
import { useState, useEffect } from "react";
import { SEARCH_SUGGESTION_URL } from "../utils/constants";

const Header = () => {
    const dispatch = useDispatch();
    const toggleSidebar = (name) => {
        dispatch(toggleMenu(name))
    }
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const handleChange = (e) => {
        setQuery(e.target.value);
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            getSuggestions();
        }, 2000);
        return () => { clearTimeout(timer) }

    }, [query])

    const getSuggestions = async () => {
        console.log("imin");
        const fetchSuggestions = await fetch(SEARCH_SUGGESTION_URL + query);
        const suggesteData = await fetchSuggestions.json();
        setSuggestions(suggesteData[1]);

    }


    return (
        <header className="flex items-center justify-center max-w-7xl m-auto mt-5">
            <div className=" flex items-center"> 
              <button onClick={()=>toggleSidebar("hi")} className=" mr-3"><FaBars/></button>                             
               <Link to='/'>
                  <button className=" flex gap-1 items-center "><FaYoutube/> YouTube<sup>IN</sup></button>
              </Link>
            </div>
            <div className="flex w-9/12 justify-center">
                <div className=" ml-20 w-96 max-w-3xl relative"> 
                    <input
                        onFocus={() => setShowSuggestions(true)}
                        value={query}
                        onChange={(e) => handleChange(e)}
                        onBlur={() => setShowSuggestions(false)}
                        className="w-full rounded-full border-2 border-inherit bg-slate-50 pl-6 py-2" 
                        type="text"
                        placeholder="Search"
                    />
                    <button
                        type="submit"
                        className=" absolute inset-y-0 right-0 flex items-center justify-center rounded-md border-2 border-inherit bg-slate-50 p-2"
                    >
                        <FaSistrix />
                    </button>
                </div>
                {showSuggestions && (
                    <div className="suggestions">
                        <ul>

                            {suggestions.map((ele, index) => {
                                return (
                                    <li key={index}>{ele}</li>
                                )
                            })}
                        </ul>
                    </div>
                )}
                <button className="mx-4 bg-slate-50 rounded-3xl p-2">
                    <FaMicrophone />
                </button>
            </div>

            <div className=" flex">
                <button className=" mr-2">
                    <FaEllipsisVertical />
                </button>
                <a href="#" className=" flex items-center border-2 border-inherit rounded-3xl p-2 gap-1">
                    <FaRegUser /> Sign in
                </a>
            </div>
        </header>
    );
};

export default Header;
