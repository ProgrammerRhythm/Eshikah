import React from 'react';
import logo from '../../Img/logo.png'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="container common">
                <div className="row rew">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 gap">
                        <img className="common" style={{height: '60px'}} src={logo} alt="" />
                        <p className="common" style={{padding: '0px 10px',color: 'white'}}>Top learning experiences that create more talent in the world.</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                      <div className="row rew">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 gap">
                        <h5 className="common fHead">Product</h5>
                        <p className="common">Overview</p>
                        <p className="common">Features</p>
                        <p className="common">Solutions</p>
                        <p className="common">Tutorials</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 gap">
                    <h5 className="common fHead">Company</h5>
                        <p className="common">About Us</p>
                        <p className="common">Careers</p>
                        <p className="common">Policy</p>
                        <p className="common">NEWS</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 gap">
                    <h5 className="common fHead">Social</h5>
                        <p className="common">Twitter</p>
                        <p className="common">Github</p>
                        <p className="common">Youtube</p>
                        <p className="common">Linkedin</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 gap">
                    <h5 className="common fHead">Legal</h5>
                        <p className="common">Terms</p>
                        <p className="common">Privacy</p>
                        <p className="common">Cookies</p>
                        <p className="common">Contact</p>
                    </div>
                      </div>
                    </div>
                </div>
            </div>
              <p style={{textAlign: 'center',marginTop: '25px'}} className='common'>© 2022 Skill-Up All rights reserved.</p>
        </div>
    );
  };
  export default Footer;