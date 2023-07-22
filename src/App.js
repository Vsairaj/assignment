import React, { Component } from "react";
import songs from './services/songs.js'
import SongCard from "./components/SongCard.js";

class App extends Component {
  state = {
    songs: songs
  }

  sortByTitle =() =>{
    this.setState({songs:  [...this.state.songs.sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1)]
    }
    );}

  sortByRating =() =>{
    this.setState({songs: this.state.songs.sort((a, b) => b.rating - a.rating)});
  }

  render() {
    return (
      <div id="super-tunes">
        <h2 id="st-title">SuperTunes - Songs of the Week</h2>
        <button id = 'Title' className='st-btn' onClick={this.sortByTitle}>Sort by Title</button>
        <button id = 'Rating' className='st-btn' onClick={this.sortByRating}>Sort by Rating</button>
        {[...this.state.songs].map((data) => 
      <SongCard data={data} key={data.id}/>)
      }
      </div>
    );
  }
}

export default App;
