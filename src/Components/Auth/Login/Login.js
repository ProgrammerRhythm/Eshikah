import React from 'react';
import Navbar from '../../Home/Navbar';
// import loginIng1 from '../../../Img/Login Picture/LogIn-1.png'
import loginIng2 from '../../../Img/Login Picture/Login-2.webp'
import './Login.css'
import Footer from '../../Home/Foter';
import { useNavigate } from 'react-router-dom';
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
    return (
        <div className="container LoginComponent">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 SBox">
                    <h1 className='Wlc'>Welcome to the new world of learning</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email" required title='Enter Email' /> <br />
                        <button style={{ padding: '10px 30px', borderRadius: '30px' }} className='buttons'>Submit</button>
                    </form>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ImgBoxLogin">
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src={loginIng2} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;