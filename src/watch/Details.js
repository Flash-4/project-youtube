import React from 'react';
import { useState } from 'react';
import { FaShare} from "react-icons/fa6";
import { FaThumbsUp} from "react-icons/fa6";
import { FaRegThumbsUp} from "react-icons/fa6";
import { FaRegThumbsDown} from "react-icons/fa6";
import { FaEllipsis} from "react-icons/fa6";
import { FaRegBell} from "react-icons/fa6";
import { FaXmark} from "react-icons/fa6";
import facebook from '../Asset/facebook (1).png';
import whatsup from '../Asset/whatsapp.png';
import embed from '../Asset/embeb.png';
import Comment from './Comment'; 
import { COMMENTS_URL } from '../utils/constants';
import { useEffect } from 'react';
// import Popup from './Popup';

const Details = ({info}) => {
     
      const{snippet,statistics}=info;
      const{title,channelTitle,publishedAt,channelId}=snippet;
      const{viewCount,likeCount}=statistics;
      
      const [count,setCount] = useState(likeCount);
      const [subs,setSubs] = useState(false);
      const [likes,setLike] = useState(false);
      const [popup,setPopoup] = useState(false);
      const [comments,setComments] = useState([]);

      useEffect(()=>{
        comment();
      },[])

      const subsChannel = async (e)=>{
        const settings = {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'key':'AIzaSyBvFmXA2almUfMGFcsIdblCZmbZDgV_8UY'
          },
          body:{
            "snippet": {
              "resourceId": {
                "kind": "youtube#channel",
                "channelId": channelId,
              }
            }
          }
      };
        const channel = await fetch(`https://youtube.googleapis.com/youtube/v3/subscriptions?part=${JSON.stringify(settings.body)}&key=AIzaSyBvFmXA2almUfMGFcsIdblCZmbZDgV_8UY `          
            )
        setSubs(true);
        const channelList = await channel.json();
        console.log(channelList);
      }

      const unSubscribed = ()=>{
        setSubs(false);
      }
      const like = ()=>{
        setCount(Number(count)+1);
        setLike(true);
      }      
      const unLike = ()=>{
        setCount(Number(count)-1);
        setLike(false);
      }
      const share = ()=>{
        setPopoup(!popup)
      }

      const comment = async()=>{
        const response = await fetch(COMMENTS_URL);
        const data = await response.json();
        setComments(data.items);
    }
    
      return (
       <>
        <div className=' p-2'>
          <h2 className='font-bold'>{title}</h2>
          
          <div>          
            
            <div className=' flex justify-evenly items-center mt-2'>

              <div className='flex items-center gap-2'>
                <h3 className='font-medium'>{channelTitle}</h3>
                {subs ? <button className=' flex items-center bg-slate-900 text-zinc-100 rounded-xl p-2' onClick={unSubscribed}><FaRegBell/> Subscribed</button> : <button className=' bg-slate-900 text-zinc-100 rounded-xl p-2' onClick={subsChannel}>Subscribe</button> }
                
              </div>

              <div className=' flex border-2 bg-slate-300 rounded-xl p-2'>
                {likes ? <button className=' border-r-2 p-1' onClick={unLike}><FaThumbsUp/></button> : <button className=' border-r-2 p-1' onClick={like}><FaRegThumbsUp/></button>}
                <p>{count}</p>
                <button className=' border-l-2 p-1'><FaRegThumbsDown/></button>
              </div>

             
              <button className='flex border-2 bg-slate-300 rounded-xl p-2  items-center ' onClick={share}><FaShare/> Share</button> 
              <button className='flex border-2 bg-slate-300 rounded-xl p-2'><FaEllipsis/></button>
            </div>
          
              <p>Views : {viewCount}</p>
              <p>publishedAt : {publishedAt.slice(0,10)} </p>  
          </div>
          

           
        </div>
        {
                popup ? <div  className=' fixed w-screen h-screen left-0 right-0 top-0 bottom-0  bg-slate-500/20'>
                <div className=' flex flex-col gap-y-3  absolute top-1/4 left-96 w-1/3 bg-white box-border rounded-3xl '>
                    <div className=' flex justify-between mt-1 p-3'>
                        Share
                      <button onClick={share}><FaXmark/></button>
                    </div>
                  <div className=' flex justify-evenly items-center'>
                    <button className=' flex flex-col gap-1.5 rounded-3xl p-2 items-center bg-slate-100 text-xs'><img src={embed} className=' w-1/2' alt='embed'/> Embed</button>
                    <a type='button' href='https://www.facebook.com/campaign/landing.php' target='_blank' className=' flex flex-col gap-1.5 rounded-3xl p-2  items-center bg-slate-100 text-xs'><img src={facebook} alt='facebook'/> Facebook</a>
                    <button className=' flex flex-col gap-1.5 rounded-3xl p-2  items-center bg-slate-100 text-xs'><img src={whatsup} alt='whatsup'/> Whatsup</button>             
                  </div>
                  <div className=' flex justify-between items-center p-3'>
                    <p className=' w-3/4 border-2 rounded-xl pl-2'>https://youtu.be/{info.id}</p> 
                    <button className=' bg-blue-800 p-3 rounded-xl'>copy</button>
                  </div>
               </div>
              </div> 
            :''}

            <div>
              <h2 className=' mt-6 border-b-2 p-2'>Add Comments...</h2>
            {
              comments?.map((data)=>{
                return <Comment datas={data} />
              })
            }
            </div>
          
           
            
              
        
  </>     
  )
}

export default Details;
