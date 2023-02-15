import React from 'react'
import "./topbar.scss";
import { NotificationsNone, Language, Settings } from "@material-ui/icons"

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Netflix Admin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src="https://picsum.photos/536/354" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar