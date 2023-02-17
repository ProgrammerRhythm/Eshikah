import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import SideContent from '../SideContent';
import ClubData from '../../Data/ClubData';
import Video from '../../Data/VdoData';
import NotFound from '../../NotFound/NotFound';
import './Club.css'
import { ArrowSquareLeft } from 'iconsax-react';
const ClubVdo = () => {
    const {id} = useParams();
    const [club,setClub] = useState(null);
    useEffect(() => {
        let club = ClubData.find((club) => club.id === id);
        if(club) {
            setClub(club);
        }
    },[id])
    const [vdo,setVdo] = useState(null);
    useEffect(() => {
        let vdo = Video.find((data) => data.id === id);
        if(vdo) {
            fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM&key=AIzaSyDFgTe6q3q12csOwp9SbGAyh810yagUNMU`)
            .then(res => res.json())
            .then(data => {setVdo(data.items)
                setVideo()
            })
            
        }
    },[id])
    // AIzaSyDFgTe6q3q12csOwp9SbGAyh810yagUNMU
    // https://www.googleapis.com/youtube/v3/playlistItems
    const [video,setVideo] = useState()
    const GetI = (data) => {
        return (
            <div>
                {
                 setVideo(data)
                }
            </div>
        )
    }
    return (
        <div>
            {club ? (
              <div className='container ClubBox'>
                 <ArrowSquareLeft size="32" color="black"/>
                       <div className="BgColor  AlignIt">
                           <ClubSec id={club.id} name={club.name} img={club.img}></ClubSec>
                           {
                            vdo ? (
                                <div className=" container" >
                                   <div className="row">
                                    <div className="col-8">
                                        <ShowI></ShowI>
                                    </div>
                                    <div className="col-4 VdoSec">
                                        <span><h4 style={{margin:'25px 0px'}}>{club.name}</h4></span>
                                    {vdo.map(data => <ShowVideos  id={club.id} Cname={club.name} Cimg={club.img} name={data.snippet.title} link={data.snippet.resourceId.videoId} description={data.snippet.description}></ShowVideos>)}
                                    </div>
                                   </div>
                                </div>
                            ) : (<NotFound />)
                           }
                       </div>
              </div>
      ) : (
        <NotFound />
      )}
        </div>
        
    );
    function ShowVideos(props) {
        let {name,link} = props;

        return(
            <div className="row">
                    <div>
                        <p onClick={() => GetI(link)} className='VdoH'>{name}</p>
                    </div>
            </div>
        )
    }
  
    
    function ShowI(){
        return(
            <div>
            <iframe className='iframe' frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title='Eshikah Videos' width="450" height="230" src={`https://www.youtube.com/embed/${video}`} id="widget2" data-gtm-yt-inspected-10="true" data-gtm-yt-inspected-1195660_202="true"></iframe>

            </div>
        )
    }
};





function ClubSec(props){
    const {name,img,id} = props;
    return(
        <div className="ClubBody">
            <div className="ClubSHead">
                <img src={img} alt="" />
                <h2>{name}</h2>
            </div>
            <div className="ClubDeNav mt-1 bg-white px-2">
                <ul>
                    <li>
                        <Link style={{color:'black'}}  to={`/dashboard/club/${id}/videos`}>Videos</Link>
                    </li>
                    <li>
                        <Link style={{color:'black'}} to={`/dashboard/club/${id}/blogs`}>Blog</Link>
                    </li>
                    <li>
                    <Link style={{color:'black'}}  to={`/dashboard/club/${id}/liveclass`}>Live Classes</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default ClubVdo;