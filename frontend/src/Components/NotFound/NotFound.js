import React from 'react';
import Not404Img from '../../Img/Not404.gif'
import Footer from '../Home/Foter';
import './NotFound.css'
import Navbar from '../Home/Navbar';
const NotFound = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="NotContent">
                <img className='img-fluid ImgStyleNot' style={{height: '400px'}} src={Not404Img} alt="" />
                <h4>404 Page Not Found</h4>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;