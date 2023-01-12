import React from 'react';
import '../DashBoard.css'
import SideContent from '../SideContent';
const Info = () => {
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


function SlideContainer() {
    return (
        <div class="Panel_panel-column__Ywh59 bg-white border mt-5 mt-md-0 p-5">
            <h1 class="Titles_information-heading__nMw4c mt-1">Welcome to the Information</h1>
            <h3 class="Titles_information-heading-text__Se-0s text-muted p-0">check or change your information as you want</h3>
            <form novalidate="" class="InfoFrom">
                <div class="mt-5 px-3 row">
                    <div class="p-0 col-lg col-12">
                        <label class="FormInput_form-label__QZuzv form-label" for="first-name-input">First Name</label>
                        <input placeholder="Arash" autocomplete="off" name="firstName" spellcheck="off" type="text" id="first-name-input" class="FormInput_form-input__AY5CP py-2 form-control form-control-sm" />
                    </div>
                    <div class="p-0 ms-lg-5 mt-3 mt-lg-0 col-lg col-12">
                        <label class="FormInput_form-label__QZuzv form-label" for="last-name-input">Last Name</label>
                        <input placeholder="Karimi" autocomplete="off" name="lastName" spellcheck="off" type="text" id="last-name-input" class="FormInput_form-input__AY5CP py-2 form-control form-control-sm" />
                    </div>
                </div>
                <div class="mt-3 mt-lg-4 px-3 row">
                    <div class="p-0 col-lg col-12">
                        <label class="FormInput_form-label__QZuzv form-label" for="email-input">Email</label>
                        <input placeholder="Enter your Email" autocomplete="off" name="email" spellcheck="off" type="text" id="email-input" class="FormInput_form-input__AY5CP py-2 form-control form-control-sm"/>
                    </div>
                    <div class="p-0 ms-lg-5 mt-3 mt-lg-0 col-lg col-12">
                        <label class="FormInput_form-label__QZuzv form-label" for="birthday-input">birthday</label>
                        <input placeholder="Enter your birthday" autocomplete="off" name="birthday" spellcheck="off" type="date" id="birthday-input" class="FormInput_form-input__AY5CP py-2 form-control form-control-sm"  />
                    </div></div>
                <button type="submit" class="mt-5 py-2 px-4 btn btn-primary">Update</button></form></div>
    )
}






export default Info;