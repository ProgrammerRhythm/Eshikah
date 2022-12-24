import { AddSquare } from 'iconsax-react';
import React from 'react';
import Data from '../../Data/Data';
import '../DashBoard.css'
import SideContent from '../SideContent';
const Clubs = () => {
    return (
        <div className="Panel_panel-wrapper d-flex justify-content-center align-items-center Margin">
            <div className="container">
                <div className="row BgColor">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 BgColor">
                        <SideContent></SideContent>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 BgColor">
                        <SlideContainer></SlideContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};


function SlideContainer(){
    return(
      <div className='container service'>
        <div className="row Sbox BgColor">
        {
          Data.map(value => <Swipe img={value.img} name={value.name} description={value.description} id={value.id}></Swipe>)
        }
         <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 BgColor ">
       <div className={`C-Club Clubs`} >
            <h3 className="cH">Join New Club</h3>
            <AddSquare size="35" className="Style"></AddSquare>
          </div>
      </div>
        </div>
      </div>
    )
  }
  
  function Swipe(props){
    return(
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 BgColor ">
       <div className={`Club${props.id} Clubs`} >
              <img className='cImg' src={props.img} alt="" />
                <h4 className="cH">{props.name}</h4>
              <p className='cD'>{props.description}</p>
          </div>
      </div>
    )
  }
  





export default Clubs;