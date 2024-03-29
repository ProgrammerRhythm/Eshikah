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
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      institution: '',
    })
    // const [token,setToken] = useState({
    //   token: ''
    // })
    const handleChange = (e) => {
      let fieldValid = true;
    
      if (e.target.name === 'firstName' || e.target.name === 'lastName' || e.target.name === 'email') {
        fieldValid = e.target.value;
      }
    
      if (e.target.name === 'password') {
        fieldValid = e.target.value;
      }
    
      if (e.target.name === 'institution') {
        const institution = e.target.value.length > 0 || '';
        fieldValid = institution;
      }
    
      if (fieldValid) {
        const newUserInfo = { ...user };
        newUserInfo[e.target.name] = e.target.value;
        setNewUser(newUserInfo);
        console.log(newUserInfo);
      }
    };
    
    const onSubmit = () => {
      const queryParams = new URLSearchParams(window.location.search);
      const token = queryParams.get('token');
      console.log(token);
    
      const { firstName, lastName, institution, password, email } = user;
      const dateOfBirth = new Date().getTime();
    
      const totalValue = {
        firstName,
        lastName,
        dateOfBirth,
        institution,
        password,
        signupToken: token,
        email,
      };
    
      console.log(totalValue);
      console.log(JSON.stringify(totalValue));
    
      sendData(totalValue);
    };
    
    const history = useNavigate();
    
    function sendData(value) {
      fetch('https://eshika.onrender.com/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then((result) => {
          const message = result.message;
          const messege = { message: message };
          console.log(messege, result);
    
          const token = result.token;
          const userData = jwt_decode(token);
          console.log(userData);
    
          const { email, lastName, firstName, institution, password } = userData;
          const signedInUser = {
            name: `${firstName} ${lastName}`,
            email: email,
            institution: institution,
            password: password,
            token: token,
          };
    
          console.log(signedInUser);
          setLoggedInUser(signedInUser);
    
          const makeJson = JSON.stringify(signedInUser);
          localStorage.setItem('user', makeJson);
          history('/dashboard');
        })
        .catch((err) => console.log(err));
    }
    
        
    return (
        <div className="container LoginComponent">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 SBox" data-aos="fade-right">
                    <h1 className='Wlc'>Welcome to the new world of learning</h1>
                      {/* <h5 style={{fontSize:'15px',color:'red'}}>{token.token}</h5> */}
                        <input onChange={handleChange} className='inputF' name='firstName' type="text"  placeholder="Enter your First Name" required title='Enter your first Name' /> <br />
                        <input  onChange={handleChange} placeholder='Enter your Last Name' name='lastName' className='inputF' type="text"  required title='Enter your last Name' />
                        <br />
                        <input  onChange={handleChange} placeholder='Enter Password' className='inputF' required type="password" name="password" id="" /> <br />
                        <input onChange={handleChange} type="text" placeholder="Enter your Institution Name (Optional)"className='inputF' name='institution' /> <br />
                        <button style={{ padding: '10px 30px', borderRadius: '30px' }} onClick={() => onSubmit()} id="click" className='buttons'>Sign Up</button>
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