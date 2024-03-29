import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import axios from "axios";
import { useEffect, useState } from "react"
import "./featured.scss"

const Featured = ({ type, setGenre }) => {

  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async() => {
        try {
            const res = await axios.get(`/movies/random?type=${type}`, {
                headers: {
                    token: `Bearer ` + JSON.parse(localStorage.getItem("user")).accessToken
                }
            });
            console.log(res)
            setContent(res.data[0]);
        } catch (err) {
            console.log(err);
        }
    };

    getRandomContent()
  }, [type]);

  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movies" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre" onChange={e => setGenre(e.target.value)}>
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="horror">Horror</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="romance">Romance</option>
                    <option value="drama">Drama</option>
                </select>
            </div>
        )}
        <img width="100%" src={content.img} alt="" />
        <div className="info">
            <img src={content.imgTitle} alt="" />
            <span className="desc">{content.desc}</span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>
            </div>
        </div> 
    </div>
  )
}

export default Featured