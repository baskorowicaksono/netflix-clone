import "./widgetSm.scss"
import { Visibility } from "@material-ui/icons"
import { useState, useEffect } from "react";
import axios from "axios";

const WidgetSm = () => {

    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
      const getNewUsers = async() => {
        try {
            const response = await axios.get("/users?new=true",{
                headers: {
                    token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
                }
            })
            setNewUsers(response.data)
        } catch (error) {
            console.log(error)
        }
      }

      getNewUsers();
    }, []);
    

  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Joining Members</span>
        <ul className="widgetSmList">
        {newUsers.map((user) => (
            <li className="widgetSmListItem">
                <img src={user.profilePic || "https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg"} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">{user.username}</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon" />
                    Display
                </button>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default WidgetSm