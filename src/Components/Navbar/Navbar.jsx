// eslint-disable-next-line no-unused-vars
import React from "react"
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'

// eslint-disable-next-line react/prop-types
const Navbar = ({setSidebar}) => {
    return (
        <nav className="flex-div">
            <div className="nav-left flex-div">
                <img src={menu_icon} alt="" className="menu-icon" onClick={()=>setSidebar(prev=>prev===false?true:false)}/>
                <img src={logo} alt="" className="logo" />
            </div>  

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder="Search" />
                    <img src={search_icon} alt=""/>
                </div>
            </div>

            <div className="nav-right flex-div">
                <img src={upload_icon} alt="" className="upload-icon"/>
                <img src={more_icon} alt="" className="more-icon"/>
                <img src={notification_icon} alt="" className="notification"/>
                <img src={profile_icon} alt="" className="profile-icon"/>
            </div>
        </nav>
    )
}

export default Navbar