import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ClubBlogD from '../../Data/Blog/ClubBlogD';
import ClubData from '../../Data/ClubData';
import NotFound from '../../NotFound/NotFound';
import SideContent from '../SideContent';

const ClubBlog = () => {
    const {id} = useParams();
    const [club,setClub] = useState(null);
    useEffect(() => {
        let club = ClubData.find((club) => club.id === id);
        if(club) {
            setClub(club);
        }
    },[id])
    const [blog,setBlog] = useState(null);
    useEffect(() => {
        let blog = ClubBlogD.find((data) => data.about === id);
        if(blog) {
            setBlog(blog.blogs);
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
                       {
                        blog ? (
                            <div className="VdoSec container" >
                             {
                                blog.map(data => <BlogBoxClub img={data.img} id={data.id} title={data.title} content={data.content} By={data.By}></BlogBoxClub> )
                             }  
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



function BlogBoxClub(props){
    let content = props.content;
    content = content.slice(0, 80)
    return (
        <div>
            <Link to={`/Blog/${props.id}`} style={{textDecoration:'none'}}>
            <div className='BlogBox'>
            <div className="img">
                <img className='FBimg ' src={props.img} alt="" />
            </div>
            <div className="Bcon">
                <h5 style={{color:'rgba(16, 24, 40, 1)',fontSize:'17px',fontWeight:'600'}}>{props.title}</h5>
                <p style={{color:'rgba(102, 112, 133, 1)',fontSize:'15px',fontWeight:'400'}}>{`${content}....`}</p>
                <p style={{color:'#949494'}}>by <span style={{color:"#dc3545"}}>{props.By}</span></p>
            </div>    
        </div>
        </Link>
        </div>
    )
}
export default ClubBlog;