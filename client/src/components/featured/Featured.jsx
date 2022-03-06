import React from 'react';
import "./featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from "axios";

const Featured = ({type}) => {
    const [content, setContent] = React.useState({});

    React.useEffect(() => {
        const getRandomContent = async () => {
            try{
                const res = await axios.get(`/movies/random?type=${type}`, {
                    headers: {
                        token: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
                    }
                });
                setContent(res.data[0]);
            } catch(err) {
                console.log(err);
            }
        };
        getRandomContent();

    }, [type]);
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movies" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="action">Action</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                    <option value="horror">Horror</option>
                    <option value="thriller">Thriller</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="romance">Romance</option>
                    <option value="mystery">Mystery</option>
                </select>
            </div>
        )}
        <img src={content.img} alt="test-bg" />
        <div className='info'>
            <img src={content.imgTitle} alt='featured-title' />
            <span className='desc'>
                {content.desc}
            </span>
            <div className='buttons'>
                <button className='play'>
                    <PlayArrowIcon />
                    <span>Play</span>
                </button>
                <button className='more'>
                    <InfoOutlinedIcon />
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured