import React from 'react';
import logo from '../../Img/logo.png'
import './Home.css'
import Himg from '../../Img/frt-img.png'
import Sicon from '../../Img/Icon/Speak.png'
import Bicon from '../../Img/Icon/Vector.png'
import Cicon from '../../Img/Icon/Layer 2.png'
import Data from '../Data/Data';

// import "./styles.css";

const Home = () => {
    return (
        <div className="home">
            <Front></Front>
            <Services></Services>
        </div>
    );
};

function Front(){
  return (
    <div className='Front'>
      <Navbar></Navbar>
      <Header></Header>
    </div>
  )
}


function Navbar(){
    return (
        <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand animate__animated animate__fadeInLeft" href="/"><img style={{height: "70px"}} src={logo} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end animate__animated animate__fadeInRight" id="navbarNav">
            <ul className="navbar-nav responsive">
              <li className="nav-item">
                <a className="nav-link text-dark active" aria-current="page" href="/Program">Program</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href='/universities'>Universities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/Clubs">Clubs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/signin">Sign in</a>
              </li>
              <li className="nav-item upBtn">
                <button className='button'> Create free account </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}
function Header(){
    return(
      <div className="header">
        <div className="container">
        <div className="row CoverUp">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 Hcol">
              {/* <img className="Bimg" src={BImg} alt="" /> */}
                <h1 className='title'>Up Your <span style={{color: '#7F56D9',}}>Skills</span> <br/> To <span style={{color: '#7F56D9',}}>Advance</span> Your <br/> <span style={{color: '#7F56D9',}}>Career</span> Path</h1>
                <p className='smt'>Provides you with the latest online learning system and material that help your knowledge growing.</p>
                <div className="upBtn">
                <button className='button'style={{padding: '10px 20px'}}> Get Started</button>
                <button className='Sv' style={{padding: '10px 20px',margin:'10px',BackgroundColor:'#F4EBFF',color:'#7F56D9',borderRadius:'7px',border:'2px solid #F4EBFF', transition: 'ease-out 0.5s'}}> See Videos</button>
                </div>
                <div className="row CoverUp HideIt">
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex flex-row Himg">
                  <img src={Sicon} style={{margin: '0px 3px'}} alt="" />
                  <p>Public Speaking</p>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex flex-row Himg">
                    <img src={Bicon} alt=""  />
                    <p>Career Oriented</p>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex flex-row Himg" >
                    <img src={Cicon} alt="" style={{margin: '0px 3px'}} />
                    <p>Creative Work</p>
                </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <img className='imgH img-fluid' src={Himg} alt="" />
            </div>
        </div>
        </div>
        </div>
    )
}

function Services(){
  return(
    <div className='container service'>
      <h5 style={{color: '#6941C6',fontWeight:'600',fontSize:'18px'}}>Our Services</h5>
      <h1 className='serviceT' style={{color: '#101828',}}>Fostering a playful & engaging learning environment</h1>
      <div className="row Sbox">
      {
        Data.map(value => <Swipe img={value.img} name={value.name} description={value.description}></Swipe>)
      }
      </div>
    </div>
  )
}

function Swipe(props){
  return(
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
     <div class="Cbox">
            <img className='cImg' src={props.img} alt="" />
              <h4 className="cH">{props.name}</h4>
            <p className='cD'>{props.description}</p>
            <button className='cB'>Learn More ></button>
        </div>
    </div>
  )
}


export default Home;