import React from 'react';
import './header.css';
import userSoild from '../../assets/user-solid.svg'


const Header = (props) => {
    console.log(props)
    return (
        <div className="header">
            <div className='header-left'>
                <img className='logo' src={`${process.env.REACT_APP_BACKEND}${props?.headerData?.companyLogo?.url}`} alt="companyLogo" />
            </div>
            <div className='header-right'>
                <div className='new-training-button rigth-space'>
                    <button className='button'>{props?.headerData?.button?.label}</button>
                </div>
                <div className='notification-icon rigth-space'>
                    <img className='bell-icon' src={`${process.env.REACT_APP_BACKEND}${props?.headerData?.notificationIcon?.url}`} alt="notification" />
                </div>
                <div className='profile rigth-space'>
                    <img className='profile-icon' src={userSoild} alt='profile' />
                </div>
            </div>
        </div>
    );
};

export default Header;
