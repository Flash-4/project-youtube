import { Link } from "react-router-dom";

 
const Video = ({info})=>{
    const{snippet,statistics} = info;
    const {thumbnails,publishedAt,channelTitle,title} = snippet;
    const {viewCount}= statistics
    return(
         <>         
            <div className=" h-80 border-2 rounded-xl ">
                <Link to={"/watch?v="+info.id} ><img src={thumbnails.medium.url} alt="thumnail"/></Link>
                <ul>
                    <Link to={"/watch?v="+info.id}><li className="font-bold">{title}</li></Link>
                    <li className="font-bold">{channelTitle}</li>
                    <li>Views :{viewCount}</li>
                    <li>Pubished : {publishedAt.slice(0,10)}</li>
                </ul>
            </div>
         </>
    )
}
export default Video;