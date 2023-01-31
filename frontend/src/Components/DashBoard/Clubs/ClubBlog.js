import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Blog from '../../Data/Blog/Blogs';
import Data from '../../Data/Data';
import NotFound from '../../NotFound/NotFound';
import SideContent from '../SideContent';

const ClubBlog = () => {
    const {id} = useParams();
    const [club,setClub] = useState(null);
    useEffect(() => {
        let club = Data.find((club) => club.id === id);
        if(club) {
            setClub(club);
        }
    },[id])
    const [blog,setBlog] = useState(null);

    useEffect(() => {
        let blog = Blog.find((blog) => blog.about === parseInt(id));
        if(blog) {
            setBlog(blog);
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
                        blog ? (
                            <div className="VdoSec container" >
                                {/* {blog.map(data => <ShowVideos name={data.name} link={data.Link} description={data.description}></ShowVideos>)} */}
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
export default ClubBlog;