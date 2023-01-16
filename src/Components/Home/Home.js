import React, { useEffect } from 'react';
import './Home.css'
import Himg from '../../Img/frt-img.png'
import Sicon from '../../Img/Icon/Speak.png'
import Bicon from '../../Img/Icon/Vector.png'
import Cicon from '../../Img/Icon/Layer 2.png'
import Data from '../Data/Data';
import YtClass from '../Data/PVClassData';
import Footer from './Foter';
import Navbar from './Navbar';
import AOS  from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Blog1 from '../Data/Blog/Blog1';
import Blog2 from '../Data/Blog/Blog2';
import Blog3 from '../Data/Blog/Blog3';
import Blog4 from '../Data/Blog/Blog4';
// import "./styles.css";


const Home = () => {
      useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease'
        });
    })
    return (
        <div className="home">
            <Front></Front>
            <Services></Services>
            <PClass></PClass>
            <RBlog></RBlog>
            <Footer></Footer>
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



function RBlog(){
  useEffect(() => {
    AOS.init({
        offset: 100,
        duration: 1000,
        easing: 'ease'
    });
})
  return (
    <div className="container">
      <h1 style={{fontWeight:'600',fontSize:'28px',textAlign:'center',padding: '20px',margin: '20px auto'
}}>Our recent blogs</h1>
    <div className='row'>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6" data-aos="fade-left">
          {
            Blog1.map(data => <LoadBlog img={data.img} date={data.date} title={data.title} content={data.smDec} about={data.about}></LoadBlog>)
          }
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6" data-aos="fade-left">
          {
            Blog2.map(data => <LoadBlog img={data.img} date={data.date} title={data.title} content={data.smDec} about={data.about}></LoadBlog>)
          }
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6" data-aos="fade-right">
          {
            Blog3.map(data => <LoadBlog img={data.img} date={data.date} title={data.title} content={data.smDec} about={data.about}></LoadBlog>)
          }
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6" data-aos="fade-right">
          {
            Blog4.map(data => <LoadBlog img={data.img} date={data.date} title={data.title} content={data.smDec} about={data.about}></LoadBlog>)
          }
        </div>
    </div>
    <div style={{textAlign:'center'}} className="upBtn">
    <button className='button'style={{padding: '10px 20px'}}>Load More</button>
    </div>
    </div>
  )
}


function LoadBlog(props){
  return(
    <Link to={`/Blog`} style={{textDecoration:'none'}}>
      <div className='BlogBox d-flex flex-row'>
    <div className="img">
        <img className='FBimg ' src={props.img} alt="" />
    </div>
     <div className="Bcon">
     <p style={{color:'rgba(105, 65, 198, 1)',fontSize:'14px',fontWeight:'500',margin:'9px 0px'}}>{props.date}</p>
          <h5 style={{color:'rgba(16, 24, 40, 1)',fontSize:'17px',fontWeight:'600'}}>{props.title}</h5>
         <p style={{color:'rgba(102, 112, 133, 1)',fontSize:'15px',fontWeight:'400'}}>{props.content}</p>
         {/* <p>{props.about}</p> */}
      </div>    
  </div>
  </Link>
  )
}
// function LoadBlogR(props){
//   return(
//     <div className='BlogBox'>
//           <img className='FBimg ' src={props.img} alt="" />
//        <p style={{color:'rgba(105, 65, 198, 1)',fontSize:'14px',fontWeight:'500',margin:'9px 0px'}}>{props.date}</p>
//             <h5 style={{color:'rgba(16, 24, 40, 1)',fontSize:'17px',fontWeight:'600'}}>{props.title}</h5>
//            <p style={{color:'rgba(102, 112, 133, 1)',fontSize:'15px',fontWeight:'400'}}>{props.content}</p>
//            {/* <p>{props.about}</p> */}
//         </div>
//   )
// }

function Header(){
  useEffect(() => {
    AOS.init({
        offset: 100,
        duration: 1000,
        easing: 'ease'
    });
})
    return(
      <div className="header">
        <div className="container">
        <div className="row CoverUp">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 Hcol" data-aos="fade-right">
              {/* <img className="Bimg" src={BImg} alt="" /> */}
                <h1 className='title'>Up Your <span style={{color: '#7F56D9',}}>Skills</span> <br/> To <span style={{color: '#7F56D9',}}>Advance</span> Your <br/> <span style={{color: '#7F56D9',}}>Career</span> Path</h1>
                <p className='smt'>Provides you with the latest online learning system and material that help your knowledge growing.</p>
                <div className="upBtn">
                <button className='button'style={{padding: '10px 20px'}}>Get Started</button>
                <button className='Sv' style={{padding: '10px 20px',margin:'10px',BackgroundColor:'#F4EBFF',color:'#7F56D9',borderRadius:'7px',border:'2px solid #F4EBFF', transition: 'ease-out 0.5s'}}> See Videos</button>
                </div>
                <div className="row CoverUp HideIt">
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex flex-row Himg">
                  <img src={Sicon} style={{margin: '0px 5px'}} alt="" />
                  <p>Public Speaking</p>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex flex-row Himg">
                    <img style={{margin: '0px 5px'}} src={Bicon} alt=""  />
                    <p>Career Oriented</p>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex flex-row Himg" >
                    <img src={Cicon} alt="" style={{margin: '0px 5px'}} />
                    <p>Creative Work</p>
                </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6" data-aos="fade-left">
                <img className='imgH img-fluid' src={Himg} alt="" />
            </div>
        </div>
        </div>
        </div>
    )
}

function Services(){
  useEffect(() => {
    AOS.init({
        offset: 100,
        duration: 1000,
        easing: 'ease'
    });
})
  return(
    <div className='container service'>
      <h5 data-aos="fade-up" style={{color: '#6941C6',fontWeight:'600',fontSize:'18px'}}>Our Services</h5>
      <h1 data-aos="fade-up" className='serviceT' style={{color: '#101828',}}>Fostering a playful & engaging learning environment</h1>
      <div className="row Sbox">
      {
        Data.map(value => <Swipe img={value.img} name={value.name} description={value.description}></Swipe>)
      }
      </div>
    </div>
  )
}

function Swipe(props){
  useEffect(() => {
    AOS.init({
        offset: 100,
        duration: 1000,
        easing: 'ease'
    });
})
  return(
    <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
     <div class="Cbox">
            <img className='cImg' src={props.img} alt="" />
              <h4 className="cH">{props.name}</h4>
            <p className='cD'>{props.description}</p>
            <button className='cB'>Learn More </button>
        </div>
    </div>
  )
}

function PClass(){
  useEffect(() => {
    AOS.init({
        offset: 100,
        duration: 1000,
        easing: 'ease'
    });
})
  return(
    <div className='container PClass'>
      <div data-aos="fade-right" className="Cheading">
        <h5 style={{color: '#6941C6',fontWeight:'600',fontSize:'18px',marginTop:'30px'}}>Explore Programs </h5>
        <h1 className='ClassT' style={{color: '#101828',}}>Our Most Popular Class</h1>
        <p className='smt'>Let's join our famous class, the knowledge provided will definitely be useful for you.</p>
      </div>
      <div className="row">
      {
        YtClass.map(data => <YtRow url={data.Link} name={data.name} description={data.description}></YtRow>)
      }
      </div>
      <div style={{textAlign: 'center'}} className="upBtn">
      <button style={{padding: '10px 20px'}} className='button'>Explore Class</button>
      </div>
    </div>
  )
}

function YtRow(props){
  useEffect(() => {
    AOS.init({
        offset: 100,
        duration: 1000,
        easing: 'ease'
    });
})
  return(
    <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
      <div style={{textAlign: 'center'}} className="YTRCard">
      <iframe className='Classbox' src={props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h4 className="CH">{props.name}</h4>
      <p className='cD'>{props.description}</p>
      </div>
    </div>
  )
}





export default Home;