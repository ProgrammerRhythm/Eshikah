import React from 'react';
import Navbar from '../Home/Navbar';
import BlogImg from '../../Img/BlogC.webp'
import Blog from '../Data/Blog/Blogs';
import './Blog.css'
import { Link } from 'react-router-dom';
import { ArrowRight } from 'iconsax-react';
import Footer from '../Home/Foter';
const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="Blog-content container">
                <div style={{ marginBottom: '50px' }} className="Bheader row">
                    <div style={{ paddingLeft: '50px' }} className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <h1 style={{ paddingTop: '15%', fontSize: '45px', fontWeight: '700' }}>HEROES <span style={{ color: 'rgb(127, 86, 217)' }}> BLOG</span> </h1>
                        <p style={{ lineHeight: '24px', fontSize: '16px', color: 'black' }}>Enjoy a personalized, fun, and interactive learning process while becoming a Hero.</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6" style={{ textAlign: 'center' }}>
                        <img src={BlogImg} style={{ paddingLeft: '50px' }} alt="" />
                    </div>
                </div>
                <hr style={{ color: 'rgb(127, 86, 217)' }} />
                <div className="BlogItem">
                <div className="row">
                    {
                        Blog.map(data => <BlogBox img={data.img} date={data.date} title={data.title} content={data.smDec} about={data.about} id={data.id} By={data.By}></BlogBox>)
                    }
                </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

function BlogBox(props) {
    let { img, title, content, By, date, id } = props;
    content = content.slice(0, 96)
    return (
        
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <Link to={`/blog/${id}`}>
                <div className="CardFbody">
                    <div className="cardImg">
                        <img  className='img-fluid' src={img} alt="" />
                    </div>
                    <div className="CardContent">
                    <Link to={`/blog/${id}`}><h1 className='BloGH' style={{fontSize:'20px',color:'#212529',fontWeight:'600',letterSpacing:'.0015em'}}>{title}</h1></Link>
                        <div className="DateA">
                        <p style={{color:'#949494'}}>by <span style={{color:"#dc3545"}}>{By}</span></p>
                        <p style={{color:'#949494'}}>{date}</p>
                        </div>
                        <p style={{color:'#212529'}}>{`${content}...`}</p>
                        <Link to={`/blog/${id}`}><button className="BlogBtn"style={{color:'rgb(127, 86, 217)'}}>Read More <ArrowRight size="20" color="rgb(127, 86, 217)"/></button></Link>
                    </div>
                </div>
                </Link>
            </div>
    )
}

export default Blogs;