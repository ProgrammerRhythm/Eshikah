import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Home/Navbar';
import loginIng1 from '../../../Img/Login Picture/loginIng1.png'
import loginIng2 from '../../../Img/Login Picture/loginimg2.png'
import loginIng3 from '../../../Img/Login Picture/loginIng3.png'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Auth.css'
import Footer from '../../Home/Foter';
// import { useNavigate } from 'react-router-dom';
import AOS  from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { UserContext } from '../../../App';

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
  const [logedInUser,setLoggedInUser] = useContext(UserContext);
  console.log(logedInUser);
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
      subData:{},
      password: '',
    })
    const [message,setMessage] = useState({
      mass: ''
    })
    const HandleChange = (e) => {
      let fildValid = true;
      if(e.target.name === 'email') {
          fildValid =  e.target.value;
      }
      if(e.target.name === 'password') {
        fildValid =  e.target.value;
    }
      if (fildValid) {
          const newUserInfo = {...user};
          newUserInfo[e.target.name]=e.target.value;
          setUser(newUserInfo);
      }
    }
    const OnSubmit = (e) => {
      toast.success('Wait Please..', {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      const email = user.email;
      const password = user.password;
      const totalValue = {
          "email": email,
          "password": password
      }
      console.log(totalValue);
      console.log(JSON.stringify(totalValue));
      SendData(totalValue);
      }
      const history = useNavigate();
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
        // const message = result.success ? result.message : result.error;
        //  const messege = {mass: message}
         if(result.success){
           const massage = 'Wait Please..'
         const messege = {mass: massage}
           setMessage(messege);
         }
         else{
          const massage = 'Invalid Password Or Email Address'
         const messege = {mass: massage}
        setMessage(messege);
         }
         const token = result.token;
         const UserData = jwt_decode(token);
         console.log(UserData);
         const {email,lastName,firstName,institution,password} = UserData;
         const signedInUser = {name:`${firstName} ${lastName}`, email: email,institution:institution,password:password,token:token}
         console.log(signedInUser);
         setLoggedInUser(signedInUser);
         const makeJson = JSON.stringify(signedInUser);
         localStorage.setItem('user',makeJson);
         history('/dashboard')})
      .catch(err => console.log(err)
        )
     
      }
    return (
        <div className="container LoginComponent">
            <ToastContainer
              position="top-right"
              autoClose={10000}
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
                <h5 style={{fontSize:'15px',color:'red'}}>{message.mass}</h5>
                    <h1 className='Wlc'>Welcome to the new world of learning</h1>
                        <input onChange={HandleChange} className='inputF' name='email' type="email" placeholder="Enter Email" required title='Enter Email' /> <br />
                        <input onChange={HandleChange} className='inputF' name='password' type="password" placeholder="Enter Password" required title='Enter Password' /> <br />
                        <button style={{ padding: '10px 30px', borderRadius: '30px' }} onClick={() => OnSubmit()} id="click" className='buttons'>Sign In</button>
                        <hr />
                 <Link className='link' to="/auth"><button className='buttons' style={{padding: '10px 30px',borderRadius: '30px'}}>Create Account</button></Link>
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