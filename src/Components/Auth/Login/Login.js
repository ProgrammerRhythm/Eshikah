import React from 'react';
import Navbar from '../../Home/Navbar';
import loginIng from '../../../Img/login.webp'
import './Login.css'
import Footer from '../../Home/Foter';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <LoginComponent></LoginComponent>
            <Footer></Footer>
        </div>
    );
};




function LoginComponent(){
    const history = useNavigate()
    const handleSubmit = (e) => {
        history('/dashboard')
        e.preventDefault();
      }
    return (
        <div className="container LoginComponent">
          <div className="row SBottom d-flex justify-content-center align-items-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 SBox">
                <h1 style={{marginBottom: '20px'}}>Sign In</h1>  
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" required /> <br />
                    <input type="password" placeholder="Password" required id="" /> <br />
                    <button style={{padding: '10px 30px',borderRadius: '30px'}} className='buttons'>Sign In</button>
                </form>
                <hr />
                 <Link className='link' to="/signup"><button className='buttons' style={{padding: '10px 30px',borderRadius: '30px'}}>Create Account</button></Link>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ImgBoxLogin">
                <img className="LoginImg img-fluid" src={loginIng} alt="" />
            </div>
          </div>
        </div>
    )
}

export default Login;