import { UserEdit, ArrowRight2, PasswordCheck, Chart21, Activity, Logout } from 'iconsax-react';
import React, {useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profilePicture from '../../Img/Arash.jpg'

const SideContent = () => {
    return (
        <div className="BgColor">
            <SMPDashboard></SMPDashboard>
            <SideBar></SideBar>

        </div>
    );
};

function SMPDashboard() {
    const jsonUser = localStorage.getItem('user');
    const Luser = JSON.parse(jsonUser)
    
    return (
        <div class="UserProfile_user-profile__soKtS d-flex flex-column align-items-center border bg-white marginUp">
            <label for="user-profile" class="UserProfile_user-profile-label__vWuSg">
                <img src={profilePicture} alt="" />
            </label>
            <h1 class="UserProfile_username__+Cz5r mt-3">{Luser.name.toUpperCase()} </h1>
            <h5 style={{fontSize:'18px',fontWeight:'600'}} class="UserProfile_user-institution">{Luser.institution.toUpperCase()}</h5>
            <h4 class="UserProfile_user-email__9UamC mt-1">{Luser.email}</h4>
        </div>
    )
}



function SideBar() {
    const history = useNavigate();
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    let User = true;
    const handleLogout = () => {
        if(User) {
         history('/')
         localStorage.removeItem('user')
        }
    }
    return (
        <div class="SideBarLinks_sidebar-links__C5-7U mt-4 bg-white border px-2 py-4">
            <ul class="m-0 p-0">
                <li class="SideBarLink_sidebar-link__bOMai d-flex justify-content-between align-items-center px-4">
                    <UserEdit></UserEdit>
                    <Link to='/dashboard/info'>
                        <button className={`${active} NonBtn`} onClick={handleClick} >Edit Profile</button>
                    </Link>
                    <ArrowRight2></ArrowRight2>
                </li>
                <div class="SideBarLink_sidebar-link-border__8c6AH">
                    <div></div>
                </div>
                <li class="SideBarLink_sidebar-link__bOMai d-flex justify-content-between align-items-center px-4">
                    <PasswordCheck></PasswordCheck>
                    <Link to='/dashboard/profile'>
                        <button className={`${active} NonBtn`} onClick={handleClick} >Change Password</button>
                    </Link>
                    <ArrowRight2></ArrowRight2>
                </li>
                <div class="SideBarLink_sidebar-link-border__8c6AH">
                    <div></div>
                </div>
                <li class="SideBarLink_sidebar-link__bOMai d-flex justify-content-between align-items-center px-4">
                    <Chart21></Chart21>
                    <Link to='/dashboard/clubs'>
                        <button className={`${active} NonBtn`} onClick={handleClick} >Clubs</button>
                    </Link>
                    <ArrowRight2></ArrowRight2>
                </li>
                <div class="SideBarLink_sidebar-link-border__8c6AH">
                    <div></div>
                </div>
                <li class="SideBarLink_sidebar-link__bOMai d-flex justify-content-between align-items-center px-4">
                    <Activity></Activity>
                   <Link to='/dashboard/activity'>
                        <button className={`${active} NonBtn`} onClick={handleClick} >Activity</button>
                    </Link>
                    <ArrowRight2></ArrowRight2>
                </li>
                <div class="SideBarLink_sidebar-link-border__8c6AH">
                    <div></div>
                </div>
                <li class="SideBarLink_sidebar-link__bOMai d-flex justify-content-between align-items-center px-4">
                    <Logout></Logout>
                        <button onClick={handleLogout} type="submit" class="btn btn-primary">Log Out</button>
                    <ArrowRight2></ArrowRight2>
                </li>
            </ul>
        </div>
    )
}

export default SideContent;