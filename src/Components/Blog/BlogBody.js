import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Blogs from '../Data/Blog/Blogs';
import NotFound from '../NotFound/NotFound';
import Navbar from '../Home/Navbar'
const BlogBody = () => {
    const {id} = useParams();
    const [blog,setBlog] = useState(null);

    useEffect(() => {
        let blog = Blogs.find((blog) => blog.id === parseInt(id));
        if(blog) {
            setBlog(blog);
        }
    },[id])
    return (
        <div>
            {blog ? (
                <div  className="container">
                    <Navbar></Navbar>
                    <h1 className="post-title">{blog.title}</h1>
                    <p style={{color:'#949494'}}>by <span style={{color:"#dc3545"}}>{blog.By} </span> {blog.date} </p>
                    <img className="img-fluid" src={blog.img} alt="" />
                    <br />
                    <br />
                    <br />
                    <p style={{color:'#87888a',fontSize:'17px'}}>{blog.content}</p>
                </div>
      ) : (
        <NotFound />
      )}
        </div>
    );
};

export default BlogBody;