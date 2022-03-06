import React from 'react'
import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import axios from "axios";
import {Link} from "react-router-dom"

const ListItem = ({index, item}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [movie, setMovie] = React.useState({});

  React.useEffect(() => {
    const getMovie = async () => {
      try{
        const res = await axios.get(`/movies/find/${item}`,{
          headers: {
            token: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
          }
        });
        setMovie(res.data);
      } catch(err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to= {"/watch"}
      state={{
         movie: movie
        }}>
      <div 
      className='listItem'
      style= {{left: isHovered && index * 225 - 50 + index * 2.5}} 
      onMouseEnter = {() => setIsHovered(true)} 
      onMouseLeave = {() => setIsHovered(false)}
      >
        <img src={movie.img} alt="cover-img" />
        {isHovered && (
          <>
          <video src={movie.trailer} type={"video/mp4"} autoPlay={true} loop muted/>
          <div className='itemInfo'>
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownOutlinedIcon className="icon" />
            </div>
            <div className='itemInfoTop'>
              <span>52 mins</span>
              <span className='limit'>+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className='desc'>
              {movie.desc}
            </div>
            <div className="genre">
              {movie.genre}
            </div>
          </div>
          </>
        )}
      </div>
    </Link>
  )
}

export default ListItem