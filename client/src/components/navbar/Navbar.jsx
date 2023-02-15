import "./navbar.scss"
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../../context/authContext/AuthContext"
import {logout} from "../../context/authContext/AuthActions"


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const {dispatch} = useContext(AuthContext);
    
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null;
    };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className='container'>
            <div className='left'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="netflix logo" />
                <Link to="/" className="link">
                    <span className="navbarMainLinks">Homepage</span>
                </Link>
                <Link to="/series" className="link">
                    <span className="navbarMainLinks">Series</span>
                </Link>
                <Link to="/movies" className="link">
                    <span>Movies</span>
                </Link>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className='right'>
                <Search className="icon" />
                <span>KID</span>
                <Notifications className="icon" />
                <img src="https://randompicturegenerator.com/img/people-generator/gd2c40f1cc9a5fc947aa1aa56c6483ebc478febafb2c0f1a7b2cb19ddd8fd68bf84151198812893820a611cf1ac231cb9_640.jpg" alt="" />
                <div className="profile">
                    <ArrowDropDown className="icon" />
                    <div className="options">
                        <span>Settings</span>
                        <span onClick={() => dispatch(logout())}>Logout</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar