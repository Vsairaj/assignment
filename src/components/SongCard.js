import React from "react";
import Rating from './Rating.js'
import PropTypes from 'prop-types';

const SongCard = (props) => {

  return (
  <div className='song-card' >
    <img id={props.data.id} src={props.data.thumb} alt="the song album"></img>
    <p id={props.data.id} className='song-title'>{props.data.title} by {props.data.artist}</p>
    <Rating id={props.data.id}  stars={props.data.rating} />
  </div>);
};

SongCard.propTypes ={
  data:PropTypes.shape({
  thumb: PropTypes.string,
  title: PropTypes.string,
  artist: PropTypes.string,
  rating: PropTypes.number
})
}

export default SongCard;
