import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Home/Navbar';
import loginIng1 from '../../../Img/Login Picture/loginIng1.png'
import loginIng2 from '../../../Img/Login Picture/loginimg2.png'
import loginIng3 from '../../../Img/Login Picture/loginIng3.png'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
// import { useJwt } from "react-jwt";
// import './Login.css'
import jwt_decode from "jwt-decode";
import Footer from '../../Home/Foter';
import AOS  from 'aos';
import 'aos/dist/aos.css';
import { UserContext } from '../../../App';
// import { useNavigate } from 'react-router-dom';
const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <LoginComponent></LoginComponent>
            <Footer></Footer>
        </div>
    );
};






function LoginComponent() {
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )
      useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease'
        });
    })
    const [Iemail,setEmail] = useState({
      Valid: false,
      email: ''
    })
    const HandleChange = (e) => {
      let fildValid = true;
      if(e.target.name === 'email') {
        fildValid =  e.target.value;
      }
      if (fildValid) {
          const newUserInfo = {...Iemail};
          newUserInfo[e.target.name]=e.target.value;
          setEmail(newUserInfo);
      }
    }
    // const history = useNavigate()
    
    const [logedInUser,setLoggedInUser] = useContext(UserContext);
    console.log(logedInUser)
    const OnClick = () => {
      const queryParams = new URLSearchParams(window.location.search);
      const token = queryParams.get('token');
      console.log(token);
      const UserData = jwt_decode(token);
      const {email,lastName,firstName,} = UserData;
      const signedInUser = {name:`${firstName} + ' ' + ${lastName}`, email: email}
      setLoggedInUser(signedInUser);
      console.log(Iemail);
    }
   
    return (
        <div className="container LoginComponent">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 SBox" data-aos="fade-right">
                    <h1 className='Wlc'>Welcome to the new world of learning</h1>
                        <input onChange={HandleChange} type="email" name='email' className='inputF' placeholder="Enter Email" required title='Enter Email' /> <br />
                        <button onClick={() => OnClick()} style={{ padding: '10px 30px', borderRadius: '30px' }} className='buttons'>Sign In</button>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ImgBoxLogin "data-aos="fade-left">
                    {/* <h1 className='Wlc' style={{margin:'5px 15px'}}>Participate in daily live classes and keep yourself engaged</h1> */}
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1 manageH">
                        <img className='manageH' src={loginIng1} alt="" />
                    </div>
                    <div className="keen-slider__slide number-slide2 manageH" >
                    <img className='manageH' src={loginIng2} alt="" />
                    </div>
                    <div className="keen-slider__slide number-slide2 manageH" >
                    <img className='manageH' src={loginIng3} alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}


export default Login;