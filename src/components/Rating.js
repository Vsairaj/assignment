import React from "react";
import PropTypes from 'prop-types';

const Rating = (props) =>  {
  const ratings = [];
   for (let i=0; i < props.stars; i++ ) {
    ratings.push(<div className='star'></div>)
  }
  return (<div className="rating">{ratings}</div>)
  };

  Rating.propTypes ={
    stars: PropTypes.number
  }

export default Rating;
