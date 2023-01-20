import React, { useEffect, useState } from 'react';
import Navbar from '../../Home/Navbar';
// import SignUpIng from '../../../Img/login.webp'
import './SignUp.css'
// import { useJwt } from "react-jwt";
import Footer from '../../Home/Foter';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
import loginIng1 from '../../../Img/Login Picture/loginIng1.png'
import loginIng2 from '../../../Img/Login Picture/loginimg2.png'
import loginIng3 from '../../../Img/Login Picture/loginIng3.png'
import { useKeenSlider } from 'keen-slider/react';
import Aos from 'aos';
// const notify = () => toast('Here is your toast.');

const SignUp = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SignUpComponent></SignUpComponent>
            <Footer></Footer>
        </div>
    );
};


function SignUpComponent(){
    // const history = useNavigate()
    // const handleSubmit = (e) => {
    //     history('/dashboard/info')
    //     e.preventDefault();
    //   }
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');
    console.log(token);
    // const DataObj = useJwt (access_token)
    // console.log(DataObj);
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
        Aos.init({
            offset: 100,
            duration: 1000,
            easing: 'ease'
        });
    })
    const [user,setUser] = useState({
      isNew: true,
      email: '',
      subData:{}
    })
    const [message,setMessage] = useState({
      message: ''
    })
    const HandleChange = (e) => {
      let fildValid = true;
      if(e.target.name === 'email') {
          fildValid =  e.target.value;
      }
      if (fildValid) {
          const newUserInfo = {...user};
          newUserInfo[e.target.name]=e.target.value;
          setUser(newUserInfo);
      }
    }
    const OnSubmit = () => {
      const email = user.email;
      const totalValue = {
          "email": email,
      }
      console.log(totalValue);
      console.log(JSON.stringify(totalValue));
      SendData(totalValue);
      }
      function SendData(value) {
        fetch('https://eshika.lazytanzil.repl.co/api/auth/register',{
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
      'Content-type': 'application/json; charset=UTF-8',
      },
      })
      .then(res => res.json())
      .then(result => {
        const message = result.message;
         const messege = {message: message}
         setMessage(messege);
         console.log(messege,result);
      })
      .catch(err => console.log(err))
      }
    return (
        <div className="container LoginComponent">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 SBox" data-aos="fade-right">
                    <h1 className='Wlc'>Welcome to the new world of learning</h1>
                      <h5 style={{fontSize:'15px',color:'red'}}>{message.message}</h5>
                        <input onChange={HandleChange} className='inputF' name='name' type="text"  placeholder="Enter your name" required title='Enter your name' /> <br />
                        <input  onChange={HandleChange} placeholder='Which Class(Optional)' name='class' className='inputF' type="text"  id="" />
                        <br />
                        <input  onChange={HandleChange} className='inputF' type="date" />
                        <br />
                        <button style={{ padding: '10px 30px', borderRadius: '30px' }} onClick={() => OnSubmit()} id="click" className='buttons'>Submit</button>
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

export default SignUp;