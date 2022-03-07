import React from 'react'
import "./sidebar.scss"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { AttachMoney, AttachMoneyOutlined, ChatBubbleOutlineOutlined, DynamicFeedOutlined, EmailOutlined, EqualizerOutlined, ReportOutlined, WorkOutlineOutlined } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">
                    Dashboard
                </h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <LineStyleIcon className='sidebarIcon' />
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <TimelineIcon className='sidebarIcon' />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className='sidebarIcon' />
                        Sales
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">
                    Quick Menu
                </h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <PersonOutlineIcon className='sidebarIcon' />
                        Users
                    </li>
                    <li className="sidebarListItem">
                        <StorefrontIcon className='sidebarIcon' />
                        Products
                    </li>
                    <li className="sidebarListItem">
                        <AttachMoneyOutlined className='sidebarIcon' />
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <EqualizerOutlined className='sidebarIcon' />
                        Reports
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">
                    Notifications
                </h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <EmailOutlined className='sidebarIcon' />
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeedOutlined className='sidebarIcon' />
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutlineOutlined className='sidebarIcon' />
                        Messages
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">
                    Staff
                </h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WorkOutlineOutlined className='sidebarIcon' />
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <TimelineIcon className='sidebarIcon' />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <ReportOutlined className='sidebarIcon' />
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar