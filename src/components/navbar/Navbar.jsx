import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false: true);
        return () => (window.onscroll = null);
    };

    console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className='container'>
            <div className='left'>
                <img src="https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=5" alt="netflix-logo" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>

            <div className='right'>
                <SearchIcon className="icon" />
                <span>KID</span>
                <NotificationsIcon className="icon" />
                <img src='https://picsum.photos/536/354' alt="profile-pic" />
                <div className='profile'>
                    <ArrowDropDownIcon className="icon" />
                    <div className='options'>
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar