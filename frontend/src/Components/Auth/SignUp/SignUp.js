import React from 'react';
import Navbar from '../../Home/Navbar';
import SignUpIng from '../../../Img/login.webp'
import './SignUp.css'
import Footer from '../../Home/Foter';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

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
    const history = useNavigate()
    const handleSubmit = (e) => {
        history('/dashboard/info')
        e.preventDefault();
      }
    return (
        <div className="container SignUpComponent">
          <div className="row SBottom d-flex justify-content-center align-items-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 SBox">
                <h1 style={{marginBottom: '20px'}}>Sign Up</h1>  
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" required /> <br />
                    <input type="password" placeholder="Password" required id="" /> <br />
                    <input type="password" placeholder="Confirm Password" required id="" /> <br />
                    <button onClick={notify} style={{padding: '10px 30px',borderRadius: '30px'}} className='buttons'>Sign Up</button>
                </form>
                <hr />
                 <Link className='link' to="/signin"><button className='buttons' style={{padding: '10px 30px',borderRadius: '30px'}}>Already have an account?</button></Link>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ImgBoxSignUp">
                <img className="SignUpImg img-fluid" src={SignUpIng} alt="" />
            </div>
          </div>
        </div>
    )
}

export default SignUp;