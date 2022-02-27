import React from 'react'
import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div 
    className='listItem'
    style= {{left: isHovered && index * 225 - 50 + index * 2.5}} 
    onMouseEnter = {() => setIsHovered(true)} 
    onMouseLeave = {() => setIsHovered(false)}
    >
      <img src='https://tbivision.com/files/2020/12/1200_Peaky-Blinders.jpg' alt="cover-img" />
      <div className='itemInfo'>
        <div className="icons">
          <PlayArrowIcon />
          <AddIcon />
          <ThumbUpOutlinedIcon />
          <ThumbDownOutlinedIcon />
        </div>
        <div className='itemInfoTop'>
          <span>52 mins</span>
          <span className='limit'>+13</span>
          <span>2007</span>
        </div>
        <div className='desc'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod, nisi eu blandit congue, nisl nisl consectetur nunc, eget consectetur nisl nisl eget.
        </div>
        <div className="genre">
          Action
        </div>
      </div>
    </div>
  )
}

export default ListItem