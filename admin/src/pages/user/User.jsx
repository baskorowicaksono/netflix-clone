import "./user.scss"
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
                <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://pixabay.com/get/g53c63a07255efe27645fceba0371f1697f242e17f87e5a03b1f24ac95d720f6992007e229d7a41fc3fa63940b9f6286b_1280.jpg" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Anna Becker</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon" />
                        <span className="userShowInfoTitle">annabeck69</span>
                    </div>

                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon" />
                        <span className="userShowInfoTitle">24.Oct.1999</span>
                    </div>

                    <span className="userShowTitle">Contact Details</span>

                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon" />
                        <span className="userShowInfoTitle">+62 812 334 679</span>
                    </div>

                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon" />
                        <span className="userShowInfoTitle">annabeck69@gmail.com</span>
                    </div>

                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon" />
                        <span className="userShowInfoTitle">New York | USA</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input 
                                type="text" 
                                placeholder="annabeck69" 
                                className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Anna Becker" 
                                className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input 
                                type="text" 
                                placeholder="annabeck69@gmail.com" 
                                className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input 
                                type="text" 
                                placeholder="+62 812 334 679" 
                                className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input 
                                type="text" 
                                placeholder="New York | USA" 
                                className="userUpdateInput" 
                            />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://pixabay.com/get/g53c63a07255efe27645fceba0371f1697f242e17f87e5a03b1f24ac95d720f6992007e229d7a41fc3fa63940b9f6286b_1280.jpg" alt="" className="userUpdateImg" />
                            <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                            <input type="file" id="file" style={{display: "none"}}/>
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