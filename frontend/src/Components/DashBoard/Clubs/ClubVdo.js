import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SideContent from '../SideContent';
import ClubData from '../../Data/ClubData';
import Video from '../../Data/VdoData';
import NotFound from '../../NotFound/NotFound';
import './Club.css'
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
            setVdo(vdo.videos);
        }
    },[id])
    return (
        <div>
            {club ? (
               <div className="Panel_panel-wrapper d-flex justify-content-center align-items-center">
               <div className="container">
                   <div className="row BgColor">
                       <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 BgColor">
                           <SideContent></SideContent>
                       </div>
                       <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 BgColor">
                           <ClubSec id={club.id} name={club.name} img={club.img}></ClubSec>
                           {
                            vdo ? (
                                <div className="VdoSec container" >
                                    {vdo.map(data => <ShowVideos name={data.name} link={data.Link} description={data.description}></ShowVideos>)}
                                </div>
                            ) : (<NotFound />)
                           }
                       </div>
                   </div>
               </div>
           </div>
      ) : (
        <NotFound />
      )}
        </div>
    );
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
                        <Link style={{color:'black'}} to={`/dashboard/club/${id}/blog`}>Blog</Link>
                    </li>
                    <li>
                    <Link style={{color:'black'}}  to={`/dashboard/club/${id}/videos`}>Live Classes</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
function ShowVideos(props) {
    const {name,link,description} = props;
    return(
        <div className="row VdoBox">
            <iframe className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 img-fluid' frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title='Eshikah Videos' width="450" height="230" src={link} id="widget2" data-gtm-yt-inspected-10="true" data-gtm-yt-inspected-1195660_202="true"></iframe>
                <div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                    <h5>{name}</h5>
                    <p style={{color:"#676767"}}>{description}</p>
                </div>
        </div>
    )
}

export default ClubVdo;