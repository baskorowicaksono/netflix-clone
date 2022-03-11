import React from 'react'
import "./user.scss"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { CalendarToday, LocationSearching, MailOutline, PhoneAndroid, Publish } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className='userTitle'>Edit User</h1>
            <Link to="/newUser">
                <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://cdn-2.tstatic.net/tribunnews/foto/bank/originals/ibu-han-so-hee-tersandung-kasus-penipuan-uang-kini-teman-sekelasnya-buka-suara.jpg" 
                         alt="userImg" 
                         className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Han So Hee</span>
                        <span className="userShowTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentityIcon className='userShowIcon' />
                        <span className="userShowInfoTitle">soxee223</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon' />
                        <span className="userShowInfoTitle">12.12.1995</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon' />
                        <span className="userShowInfoTitle">+62 812 8796 1243</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className='userShowIcon' />
                        <span className="userShowInfoTitle">soxee223@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className='userShowIcon' />
                        <span className="userShowInfoTitle">Seoul | South Korea</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">
                    Edit
                </span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input 
                            type="text" 
                            placeholder='soxee223' 
                            className="userUpdateInput" />
                        </div>
                        
                        <div className="userUpdateItem">
                            <label>FullName</label>
                            <input 
                            type="text" 
                            placeholder='Han So Hee' 
                            className="userUpdateInput" />
                        </div>
                        
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input 
                            type="text" 
                            placeholder='soxee223@gmail.com' 
                            className="userUpdateInput" />
                        </div>

                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input 
                            type="text" 
                            placeholder='+62 812 8796 1243' 
                            className="userUpdateInput" />
                        </div>

                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input 
                            type="text" 
                            placeholder='Seoul | South Korea' 
                            className="userUpdateInput" />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img 
                            src="https://cdn-2.tstatic.net/tribunnews/foto/bank/originals/ibu-han-so-hee-tersandung-kasus-penipuan-uang-kini-teman-sekelasnya-buka-suara.jpg" 
                            alt="userCurrentImg" 
                            className="userUpdateImg" 
                            />
                            <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                            <input type="file" id='file' style={{display: "none"}} />
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User