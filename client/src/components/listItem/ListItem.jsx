import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./listitem.scss"

const ListItem = ({index, item}) => {

  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item,
        {
          headers: {
            token: `Bearer ` + JSON.parse(localStorage.getItem("user")).accessToken
          }
        });
        setMovie(res.data);

      } catch (err) {
        console.log(err);
      }
    }
    getMovie();
  }, [item])

  return (
    <Link to={{pathname:"/watch", movie:movie}}>
      <div className="listItem" style={{left: isHovered && index * 225 - 50 + index * 2.5}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img src={movie?.imgSm} alt="" />
        {isHovered && (      
        <>
        <video src={movie.trailer} autoPlay={true} loop />
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className="icon" />
            <Add className="icon" />
            <ThumbUpAltOutlined className="icon" />
            <ThumbDownAltOutlined className="icon" />
          </div>
          <div className="itemInfoTop">
            <span>{movie.duration}</span>
            <span className="ageLimit">{movie.limit ? "+" + movie.limit : "E"}</span>
            <span>{movie.year}</span>
          </div>
          <div className="desc">
            {movie.desc}
          </div>
          <div className="genre">{movie.genre}</div>
        </div>
        </>
        )}
      </div>
    </Link>
  )}

export default ListItem