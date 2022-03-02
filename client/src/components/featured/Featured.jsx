import React from 'react';
import "./featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({type}) => {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
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
        <img src={require("C:/Users/Baskoro/Documents/coding/netflix-clone/netflix/src/assets/bg.jpg")} alt="test-bg" />
        <div className='info'>
            <img src={require('C:/Users/Baskoro/Documents/coding/netflix-clone/netflix/src/assets/title.png')} alt='featured-title' />
            <span className='desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet pellentesque aliquam. Nam blandit luctus nisl id efficitur. Praesent urna nibh, vehicula vitae eleifend in, commodo vel libero. Duis turpis neque, pellentesque fringilla maximus ac, rhoncus id eros. Sed eu vulputate dui. Fusce vitae mollis mauris. Duis lorem tellus, malesuada sit amet blandit a, volutpat sit amet mauris. Donec et ultrices nunc, a maximus ligula. Donec dapibus neque et posuere pharetra.
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