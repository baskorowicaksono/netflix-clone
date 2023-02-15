import React from 'react';
import "./sidebar.scss";
import { BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, PlayCircleOutline, Timeline, TrendingUp, WorkOutline, List } from "@material-ui/icons"
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/" className='link'>
                <li className="sidebarListItem">
                  <LineStyle className='' />
                  Home
                </li>
              </Link>
              <li className="sidebarListItem">
                <Timeline className='' />
                Analytics
              </li>
              <li className="sidebarListItem">
                <TrendingUp className='' />
                Sales
              </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link to="/users" className='link'>
                <li className="sidebarListItem">
                  <PermIdentity className='' />
                  Users
                </li>
              </Link>
              <Link to="/movies" className='link'>
                <li className="sidebarListItem">
                  <PlayCircleOutline className='' />
                  Movies
                </li>
              </Link>
              <Link to="/lists" className='link'>
                <li className="sidebarListItem">
                  <List className='' />
                  Lists
                </li>
              </Link>
              <li className="sidebarListItem">
                <BarChart className='' />
                Reports
              </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <MailOutline className='' />
                Mail
              </li>
              <li className="sidebarListItem">
                <DynamicFeed className='' />
                Feedback
              </li>
              <li className="sidebarListItem">
                <ChatBubbleOutline className='' />
                Messages
              </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <WorkOutline className='' />
                Manage
              </li>
              <li className="sidebarListItem">
                <Timeline className='' />
                Analytics
              </li>
              <li className="sidebarListItem">
                <Report className='' />
                Reports
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Sidebar