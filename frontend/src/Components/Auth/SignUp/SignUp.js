import React, { useContext, useEffect, useState } from 'react';
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
import jwt_decode from "jwt-decode";
import Aos from 'aos';
import { UserContext } from '../../../App';
import { useNavigate } from 'react-router-dom';
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
  const [logedInUser,setLoggedInUser] = useContext(UserContext);
  console.log(logedInUser);
    // const history = useNavigate()
    // const handleSubmit = (e) => {
    //     history('/dashboard/info')
    //     e.preventDefault();
    //   }
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
    const [user,setNewUser] = useState({
      firstName: '',
      lastName: '',
    })
    // const [token,setToken] = useState({
    //   token: ''
    // })
    const HandleChange = (e) => {
      let fildValid=true;
      if(e.target.name === 'firstName') {
          fildValid =  e.target.value;
      }
      if(e.target.name === 'lastName') {
        fildValid =  e.target.value;
    }
      if (fildValid) {
          const newUserInfo = {...user};
          newUserInfo[e.target.name]=e.target.value;
          setNewUser(newUserInfo);
          console.log(newUserInfo);
      }
    }
    const OnSubmit = () => {
      const queryParams = new URLSearchParams(window.location.search);
      const token = queryParams.get('token');
      console.log(token);
        const firstName = user.firstName;
        const lastName = user.lastName;
        const date = new Date().getTime();
        const totalValue = {
            "firstName": firstName,
            'lastName': lastName,
            'dateOfBirth': date,
            'token': token
        }
        console.log(totalValue);
        console.log(JSON.stringify(totalValue));
        SendData(totalValue);
        }
        const history = useNavigate();
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
          
          const token = result.token;
          const UserData = jwt_decode(token);
          console.log(UserData);
          const {email,lastName,firstName,} = UserData;
          const signedInUser = {name:`${firstName} ${lastName}`, email: email}
          setLoggedInUser(signedInUser);
          const makeJson = JSON.stringify(user);
          localStorage.setItem('user',makeJson);
          history('/dashboard')
        })
        .catch(err => console.log(err))
        }
        
    return (
        <div className="container LoginComponent">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 SBox" data-aos="fade-right">
                    <h1 className='Wlc'>Welcome to the new world of learning</h1>
                      {/* <h5 style={{fontSize:'15px',color:'red'}}>{token.token}</h5> */}
                        <input onChange={HandleChange} className='inputF' name='firstName' type="text"  placeholder="Enter your First Name" required title='Enter your first Name' /> <br />
                        <input  onChange={HandleChange} placeholder='Enter your Last Name' name='lastName' className='inputF' type="text"  required title='Enter your last Name'  id="" />
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