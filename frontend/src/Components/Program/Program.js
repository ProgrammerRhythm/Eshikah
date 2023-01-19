import React from 'react';
import Footer from '../Home/Foter';
import Navbar from '../Home/Navbar';
import './Program.css'
import ProgramImage from '../../Img/program.png'
const Program = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="ProgramContent container">
                <div className="row">
                    <div  className="leftPa col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <h1>Live <span style={{ color: 'rgb(127, 86, 217)' }}> Programs</span> </h1>
                        <p style={{ lineHeight: '24px', fontSize: '16px', color: 'rgba(100, 100, 100, 1)' }}>Live online programs offer access to our top-notch education, delivered interactively, flexibly and remotely via cutting-edge technology.</p>
                        <button className='Sv' style={{padding: '10px 20px',BackgroundColor:'#7F56D9',color:'rgba(127, 86, 217, 1)',borderRadius:'7px',border:'2px solid #F4EBFF', transition: 'ease-out 0.5s'}}>Join Now</button>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <img className="img-fluid" src={ProgramImage} alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Program;