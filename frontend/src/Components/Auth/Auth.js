import React, { useEffect, useState } from 'react';
import Navbar from '../Home/Navbar';
import loginIng1 from '../../Img/Login Picture/loginIng1.png'
import loginIng2 from '../../Img/Login Picture/loginimg2.png'
import loginIng3 from '../../Img/Login Picture/loginIng3.png'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Auth.css'
import Footer from '../Home/Foter';
// import { useNavigate } from 'react-router-dom';
import AOS  from 'aos';
import 'aos/dist/aos.css';

const Auth = () => {
    return (
        <div>
            <Navbar></Navbar>
            <LoginComponent></LoginComponent>
            <Footer></Footer>
        </div>
    );
};

function LoginComponent() {
    // const history = useNavigate()
    // const handleSubmit = (e) => {
    //     // history('/dashboard/info')
    //     // e.preventDefault();
    //     console.log(e);
    // }
    

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
    const [user,setUser] = useState({
      isNew: true,
      email: '',
      subData:{}
    })
    const [message,setMessage] = useState({
      mass: ''
    })
    console.log(message);
    const HandleChange = (e) => {
      let fildValid = true;
      if(e.target.name === 'email') {
        fildValid = /\S+@\S+\.\S+/.test(e.target.value);
        fetch('https://eshika.onrender.com/health')
        .then(res => res.json())
        .then(data => {
          console.log(data.message)
        }
        )
      }
      if (fildValid) {
          const newUserInfo = {...user};
          newUserInfo[e.target.name]=e.target.value;
          setUser(newUserInfo);
      }
    }
    const [isToastDisplayed, setIsToastDisplayed] = useState(false);

  const OnSubmit = (e) => {
    const email = user.email;
    if (email.length > 0 && !isToastDisplayed) {
      const totalValue = { email };
      
      const massage = 'Wait Please...';
      toast.success(massage, {
        position: "top-right",
        autoClose: 15000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setIsToastDisplayed(true);
      setTimeout(() => {
        setIsToastDisplayed(false);
      }, 15000);
      SendData(totalValue);
    }
  }
      function SendData(value) {
        fetch('https://eshika.onrender.com/api/auth/login',{
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
      'Content-type': 'application/json; charset=UTF-8',
      },
      })
      .then(res => res.json())
      .then(result => {
        if(result.success){
        const massage = 'Please Check Your Email'
        const messege = {mass: massage}
        setMessage(messege);
        toast.success(massage, {
          position: "top-right",
          autoClose: 10000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        }
        else{
        const massage = 'You have already registered with this email address'
        const messege = {mass: massage}
        toast.error(massage, {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
       setMessage(messege);
        }
      })
      .catch(err => console.log(err))
     
      }
    return (
        <div className="container LoginComponent">
            <ToastContainer
              position="top-right"
              autoClose={10500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              />
              {/* Same as */}
            <ToastContainer />

            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 SBox" data-aos="fade-right">
                    <h1 className='Wlc'>Welcome to the new world of learning</h1>
                      {/* <h5 style={{fontSize:'15px',color:'red'}}>{message.mass}</h5> */}
                        <input onChange={HandleChange} className='inputF' name='email' type="email" placeholder="Enter Email" required title='Enter Email' /> <br />
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


export default Auth;