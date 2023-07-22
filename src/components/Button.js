import React from "react";


const Button = ({state, sort_by}) =>  {

    const sortBy = (e) => {
        return e.target.id === 'Title' ? sortByTitle() : e.target.id === 'Rating' ? sortByRating() : null
    }

    const sortByTitle = () => {
        const newState = state.songs.sort((a, b) => b.title - a.title)
        console.log("sortbytitle",newState)
    }

    const sortByRating = () => {
        state.songs.sort((a, b) => b.rating - a.rating);
    }

   return (<button id = {sort_by} className='st-btn' onClick={sortBy}>Sort by {sort_by}</button>);

 
}
  

export default Button;
