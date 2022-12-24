import React from 'react';
import '../DashBoard.css'
import SideContent from '../SideContent';
const Activity = () => {
    return (
        <div className="Panel_panel-wrapper d-flex justify-content-center align-items-center Margin">
            <div className="container">
                <div className="row BgColor">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 BgColor">
                        <SideContent></SideContent>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 BgColor">
                    </div>
                </div>
            </div>
        </div>
    );
};









export default Activity;