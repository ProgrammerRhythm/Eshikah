import React, { useEffect } from 'react';
import Navbar from '../../Home/Navbar';
import loginIng1 from '../../../Img/Login Picture/loginIng1.png'
import loginIng2 from '../../../Img/Login Picture/loginimg2.png'
import loginIng3 from '../../../Img/Login Picture/loginIng3.png'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './Login.css'
import Footer from '../../Home/Foter';
import { useNavigate } from 'react-router-dom';
import AOS  from 'aos';
import 'aos/dist/aos.css';
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
    const history = useNavigate()
    const handleSubmit = (e) => {
        history('/dashboard/info')
        e.preventDefault();
    }
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
    return (
        <div className="container LoginComponent">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 SBox" data-aos="fade-right">
                    <h1 className='Wlc'>Welcome to the new world of learning</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Enter Email" required title='Enter Email' /> <br />
                        <button style={{ padding: '10px 30px', borderRadius: '30px' }} className='buttons'>Submit</button>
                    </form>
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