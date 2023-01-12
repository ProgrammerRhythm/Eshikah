import React from 'react';
import '../DashBoard.css'
import SideContent from '../SideContent';
// import profilePicture from '../../../Img/Arash.jpg'

const Profile = () => {
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
        <div class="Panel_panel-column__Ywh59 bg-white border marginUp">
            <h1 class="Titles_information-heading__nMw4c mt-1">Welcome to the change password</h1>
            <h3 class="Titles_information-heading-text__Se-0s text-muted p-0">change your password as you want</h3>
            <form novalidate="" class="mt-4 InfoFrom">
                <div class="p-0">
                    <label class="FormInput_form-label__QZuzv form-label" for="current-password-input">Current Password</label>
                    <input placeholder="Enter your Current Password" autocomplete="off" name="currentPassword" spellcheck="off" type="Password" id="current-password-input" class="FormInput_form-input__AY5CP px-3 py-2 form-control form-control-md" value="" />
                </div>
                <div class="p-0 mt-3">
                    <label class="FormInput_form-label__QZuzv form-label" for="new-password-input">New Password</label>
                    <input placeholder="Enter your New Password" autocomplete="off" name="newPassword" spellcheck="off" type="password" id="new-password-input" class="FormInput_form-input__AY5CP px-3 py-2 form-control form-control-md" value="" /></div><div class="p-0 mt-3">
                    <label class="FormInput_form-label__QZuzv form-label" for="confirm-new-password-input">Confirm New Password</label>
                    <input placeholder="Enter your Confirm New Password" autocomplete="off" name="confirmNewPassword" spellcheck="off" type="password" id="confirm-new-password-input" class="FormInput_form-input__AY5CP px-3 py-2 form-control form-control-md" value="" />
                </div>
                <button type="submit" class="mt-3 py-2 px-4 btn btn-primary">Update</button>
            </form>
        </div>
    )
}





export default Profile;