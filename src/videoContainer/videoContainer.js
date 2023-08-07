import { useEffect,useState } from 'react';
import { YOUTUBE_URL } from '../utils/constants';
import Video from './Video';
const VideoContainer = () => {
    const [videos,setVideos] = useState([])

    useEffect(()=>{
        getVideoList();
    },[])

    const getVideoList = async()=>{
        const videoData =  await fetch(YOUTUBE_URL);
        const videoList = await videoData.json();        
        setVideos(videoList.items);
    }
    if(videos.length ===0)
    return "No videos Found";
  return (
    <>
        {            
            videos.map((video)=>{
                return(

                    <Video key={video.id} info={video}/>
                )
            })
        }
        
    </>

  )
}

export default VideoContainer
