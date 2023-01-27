import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Blog from '../Data/Blog/Blogs';
import NotFound from '../NotFound/NotFound';
import Navbar from '../Home/Navbar'
import Footer from '../Home/Foter'
const BlogBody = () => {
    const {id} = useParams();
    const [blog,setBlog] = useState(null);

    useEffect(() => {
        let blog = Blog.find((blog) => blog.id === parseInt(id));
        if(blog) {
            setBlog(blog);
        }
    },[id])
    return (
        <div>
            {blog ? (
                <div>
                <div  className="container BlogBoody">
                    <Navbar></Navbar>
                    <h1 className="post-title">{blog.title}</h1>
                    <p style={{color:'gray'}}>Have a limited amount of time? Listen to the blog.</p>
                    <audio src="" controls>

                    </audio>
                    <p style={{color:'#949494'}}>by <span style={{color:"#dc3545"}}>{blog.By} </span> {blog.date} </p>
                    <img className="img-fluid" src={blog.img} alt="" />
                    <br />
                    <br />
                    <br />
                    <span style={{color:'#87888a',fontSize:'17px'}}>{blog.content}</span>
                </div>
                <Footer></Footer>
                </div>
      ) : (
        <NotFound />
      )}
        </div>
    );
};

export default BlogBody;