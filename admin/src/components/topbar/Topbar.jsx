import React from 'react'
import "./Topbar.scss"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">
                    Netflix Admin
                </span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNoneIcon />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <LanguageIcon />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <SettingsIcon />
                </div>
                <img src="https://i.ibb.co/yRqm6h1/barrel-fit-117780206-227898488535124-6621349274159945725-n.jpg" alt="top-avatar" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar;