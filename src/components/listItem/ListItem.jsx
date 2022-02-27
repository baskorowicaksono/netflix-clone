import React from 'react'
import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const ListItem = () => {
  return (
    <div className='listItem'>
      <img src='https://tbivision.com/files/2020/12/1200_Peaky-Blinders.jpg' alt="cover-img" />
      <div className='itemInfo'>
        <div className="icons">
          <PlayArrowIcon />
          <AddIcon />
          <ThumbUpOutlinedIcon />
          <ThumbDownOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default ListItem