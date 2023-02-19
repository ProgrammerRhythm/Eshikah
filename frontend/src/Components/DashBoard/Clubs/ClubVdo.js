import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
// import SideContent from '../SideContent';
import ClubData from '../../Data/ClubData';
import Video from '../../Data/VdoData';
import axios from "axios";
// import 'react-youtube-playlist/dist/styles'
import NotFound from '../../NotFound/NotFound';
import './Club.css'
import { ArrowSquareLeft } from 'iconsax-react';
// import axios from 'axios';
// import YouTube from 'react-youtube';
const ClubVdo = () => {
  const { id } = useParams();
  const [club, setClub] = useState(null);
  useEffect(() => {
    let club = ClubData.find((club) => club.id === id);
    if (club) {
      setClub(club);
    }
  }, [id])
  const [vdo, setVdo] = useState(null);
  const [video, setVideo] = useState();
  const [title, setTitle] = useState();
  useEffect(() => {
    
    let vdo = Video.find((data) => data.id === id);
    const PlaylistId = vdo.PlaylistId;
    if (vdo) {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PlaylistId}&key=AIzaSyDFgTe6q3q12csOwp9SbGAyh810yagUNMU`
        )
        .then((response) => {
          const videoIds = response.data.items.map(
            (item) => item
          );
          setVdo(videoIds);
          setVideo('0qClBFpyttg');
          setTitle('Welcome to Eshikha: Your One-Stop Solution for Skills Development!')
          console.log(videoIds);
        });

    }
  }, [id])
  
  // const GetI = (link) => {
  //     return (
  //         <div>
  //             {
  //              setVideo(link)
  //             }

  //         </div>
  //     )
  // }
  return (
    <div>
      {club ? (
        <div className='container ClubBox'>
          <Link to='/dashboard/clubs'> <ArrowSquareLeft size="32" color="black" style={{ margin: '10px' }} /></Link>
          <div className="BgColor  AlignIt">
            <ClubSec id={club.id} name={club.name} img={club.img}></ClubSec>
            {
              vdo ? (
                <div className=" container" >
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                      <ShowI></ShowI>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 VdoSec">
                      <span><h4 style={{ margin: '25px 0px' }}>{club.name}</h4></span>
                      <hr />
                      {/* <Playlist></Playlist> */}
                      {vdo.map(data => <ShowVideos id={club.id} Cname={club.name} Cimg={club.img} name={data.snippet.title} link={data.snippet.resourceId.videoId} description={data.snippet.description}></ShowVideos>)}
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
    const { name, link, id } = props;
    const [activeElement, setActiveElement] = useState(null);
  
    const handleClick = (elementId) => {
      setActiveElement(elementId);
      setVideo(link)
      setTitle(name)
      console.log(link);
    };
  
    return (
        <div onClick={() => handleClick(id)}>
          <p id={`video-${id}`} className={activeElement === id ? 'active' : 'VdoH'}>{name}</p>
        </div>
    );
  }
  
  
  function ShowI() {
    return (
      <div>
        <iframe className='iframe' frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title='Eshikah Videos' width="450" height="230" src={`https://www.youtube.com/embed/${video}?autoplay=1`} id="widget2" data-gtm-yt-inspected-10="true" data-gtm-yt-inspected-1195660_202="true"></iframe>
        <hr />
        <h5>{title}</h5>
      </div>
    )
  }
};





function ClubSec(props) {
  const { name, id } = props;
  const location = useLocation();
  const [active, setActive] = useState('');

  useEffect(() => {
    // Set active link based on the current location path
    const path = location.pathname;
    if (path.includes('/videos')) {
      setActive('videos');
    } else if (path.includes('/blogs')) {
      setActive('blogs');
    } else if (path.includes('/liveclass')) {
      setActive('liveclass');
    } else if (path.includes('/activity')) {
      setActive('activity');
    }
  }, [location]);
  return (
    <div className="ClubBody">
      <div className="ClubSHead">
        <h2>{name}</h2>
      </div>
      <div className="ClubDeNav mt-1 bg-white px-2">
        <ul>
          <li>
            <Link
              style={{color: active === 'videos' ? '#7F56D9' : 'black', fontWeight: active === 'videos' ? 'bold' : 'normal' }}
              to={`/dashboard/club/${id}/videos`}
              onClick={() => setActive('videos')}
            >
              Videos
            </Link>
          </li>
          <li>
            <Link
              style={{color: active === 'blogs' ? '#7F56D9' : 'black', fontWeight: active === 'blogs' ? 'bold' : 'normal' }}
              to={`/dashboard/club/${id}/blogs`}
              onClick={() => setActive('blogs')}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              style={{color: active === 'liveclass' ? '#7F56D9' : 'black', fontWeight: active === 'liveclass' ? 'bold' : 'normal' }}
              to={`/dashboard/club/${id}/liveclass`}
              onClick={() => setActive('liveclass')}
            >
              Live Classes
            </Link>
          </li>
          <li>
            <Link
              style={{color: active === 'liveclass' ? '#7F56D9' : 'black', fontWeight: active === 'liveclass' ? 'bold' : 'normal' }}
              to={`/dashboard/club/${id}/activity`}
              onClick={() => setActive('activity')}
            >
              Activity
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ClubVdo;