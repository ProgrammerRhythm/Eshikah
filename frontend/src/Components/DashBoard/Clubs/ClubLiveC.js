import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ProgramImage from '../../../Img/program.png'
import SideContent from '../SideContent';
import ClubData from '../../Data/ClubData';
import NotFound from '../../NotFound/NotFound';

const ClubLiveC = () => {
    const {id} = useParams();
    const [club,setClub] = useState(null);
    useEffect(() => {
        let club = ClubData.find((club) => club.id === id);
        if(club) {
            setClub(club);
        }
    },[id])
    return (
        <div>
             {club ? (
               <div className="Panel_panel-wrapper d-flex justify-content-center align-items-center">
               <div className="container">
                   <div className="row BgColor AlignItems">
                       <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 BgColor">
                           <SideContent></SideContent>
                       </div>
                       <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 BgColor">
                           <ClubSec id={club.id} name={club.name} img={club.img}></ClubSec>
                           <div className="LiveClass container">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 LiveClass">
                                        <h1>Live <span style={{ color: 'rgb(127, 86, 217)' }}> Programs</span> </h1>
                                        <p style={{ lineHeight: '24px', fontSize: '16px', color: 'rgba(100, 100, 100, 1)' }}>Live online programs offer access to our top-notch education, delivered interactively, flexibly and remotely via cutting-edge technology.</p>
                                        <button className='Sv' style={{padding: '10px 20px',BackgroundColor:'#7F56D9',color:'rgba(127, 86, 217, 1)',borderRadius:'7px',border:'2px solid #F4EBFF', transition: 'ease-out 0.5s'}}>Join Now</button>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 LiveImg">
                                        <img className="img-fluid" src={ProgramImage} alt="" />
                                    </div>
                                </div>
                            </div>
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
                style={{ color: active === 'videos' ? '#7F56D9' : 'black', fontWeight: active === 'videos' ? 'bold' : 'normal' }}
                to={`/dashboard/club/${id}/videos`}
                onClick={() => setActive('videos')}
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                style={{ color: active === 'blogs' ? '#7F56D9' : 'black', fontWeight: active === 'blogs' ? 'bold' : 'normal' }}
                to={`/dashboard/club/${id}/blogs`}
                onClick={() => setActive('blogs')}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                style={{ color: active === 'liveclass' ? '#7F56D9' : 'black', fontWeight: active === 'liveclass' ? 'bold' : 'normal' }}
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

export default ClubLiveC;