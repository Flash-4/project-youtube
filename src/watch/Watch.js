import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { API_KEY,YOUTUBE_WATCH_URL } from '../utils/constants';
import Details from './Details';
// import Video from '../videoContainer/Video';
import { YOUTUBE_URL } from '../utils/constants';
import Suggestion from './Suggestion';
import { closeMenu } from '../utils/sideBarSlice';
import { useDispatch } from 'react-redux';

const Watch = () => {
      const[searchparam]=useSearchParams();
      const [detail,setDetail]=useState([]);
      const [videos,setVideos] = useState([])
      const dispatch = useDispatch()
      useEffect(()=>{
        getVideo()
        getVideoList()
        dispatch(closeMenu())
      },[])

      const getVideo= async()=>{
        const videoData = await fetch(YOUTUBE_WATCH_URL+searchparam.get('v')+"&key="+API_KEY);
        const videolink = await videoData.json();
        setDetail(videolink.items);   
      }
      const getVideoList = async()=>{
        const videoData =  await fetch(YOUTUBE_URL);
        const videoList = await videoData.json();        
        setVideos(videoList.items);
      }
      if(detail.length===0)
        return 'wait man its loading';
 
  return (
    <>
   
      <div className=' flex gap-x-5'>
          <div className=''>       
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+searchparam.get('v')} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          {
            detail.map((info)=>{
              return <Details id= {info.id} info={info} />
            })
              
          }
            
          </div>
          <div className=' flex '>
            <div className=''>
            {videos.map((video)=>{
              return   <Suggestion key={video.id} info={video}/>
            })}
            </div>
           
           
          
          </div>
      </div>


    </>
  )
}

export default Watch;
