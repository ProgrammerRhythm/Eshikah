import React, { useEffect, useRef, useState } from 'react';
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
  useEffect(() => {
    let vdo = Video.find((data) => data.id === id);
    if (vdo) {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM&key=AIzaSyDFgTe6q3q12csOwp9SbGAyh810yagUNMU`
        )
        .then((response) => {
          const videoIds = response.data.items.map(
            (item) => item
          );
          setVdo(videoIds);
          console.log(videoIds);
        });

    }
  }, [id])
  const [video, setVideo] = useState()
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
    let { name, link, id } = props;
    const activeRef = useRef(null);
  
    const handleClick = (event) => {
      const currentActive = activeRef.current;
      const target = event.target;
  
      if (currentActive && currentActive !== target) {
        currentActive.classList.remove("active");
      }
  
      if (currentActive !== target) {
        target.classList.add("active");
        activeRef.current = target;
        GetI(link);
      } else {
        target.classList.remove("active");
        activeRef.current = null;
        GetI("");
      }
    };
  
    const GetI = (link) => {
      setVideo(link);
    };
  
    useEffect(() => {
      const currentActive = activeRef.current;
  
      if (currentActive) {
        currentActive.classList.add("active");
      }
    }, []);
  
    return (
      <div className="row">
        <div onClick={handleClick}>
          <p id={`video-${id}`} className="VdoH">
            {name}
          </p>
        </div>
      </div>
    );
  }
  
  function ShowI() {
    return (
      <div>
        <iframe className='iframe' frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title='Eshikah Videos' width="450" height="230" src={`https://www.youtube.com/embed/${video}`} id="widget2" data-gtm-yt-inspected-10="true" data-gtm-yt-inspected-1195660_202="true"></iframe>

      </div>
    )
  }
};





function ClubSec(props) {
  const { name, img, id } = props;
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
    }
  }, [location]);
  return (
    <div className="ClubBody">
      <div className="ClubSHead">
        <img src={img} alt="" />
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
        </ul>
      </div>
    </div>
  )
}

export default ClubVdo;