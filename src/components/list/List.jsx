import React from 'react';
import "./list.scss";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem';

const List = () => {

    const [slideNumber, setSlideNumber] = React.useState(0);
    const [isMoved, setIsMoved] = React.useState(false);
    const listRef = React.useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        else if(direction === "right" && slideNumber < 5){
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }

  return (
    <div className='list'>
        <span className='listTitle'>Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosNewOutlinedIcon 
            className="sliderArrow left" 
            onClick={() => handleClick("left")}
            style={{display: !isMoved && "none"}}
            />
            <div className="container" ref={listRef}>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />

            </div>
            <ArrowForwardIosOutlinedIcon className="sliderArrow right" onClick={() => handleClick("right")} />
        </div>
    </div>
  )
}

export default List