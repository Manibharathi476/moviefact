import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Movie from 'components/Movie/Movie';
import MovieInfo from 'components/Movie/MovieInfo';
import Login from 'components/Login/Login';
import Search from 'components/Search/Search.js';



class App extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            currentMovie: null,
            videos: []
        }

        this.apikey = "301b9d2f0ecfe254c54857cc606b793b";
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apikey}&language=en-US&page=1`)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies: [...data.results] })
      console.log(this.state.movies);
    })
    }

    viewMovieInfo = (id) => {
        const filteredMovie = this.state.movies.filter(movie => movie.id == id)
        console.log("This is filtered Movie:");
        console.log(filteredMovie);
    
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
        console.log(newCurrentMovie);
    
        this.setState({ currentMovie: newCurrentMovie },() => {
          console.log(this.state.currentMovie);})
    }
    
    videoOnReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }


    render() {
        return(
            <div className="App">
            <IndexNavbar />
            <IndexHeader />
            {this.state.currentMovie == null ? 
            <Movie viewMovieInfo={this.viewMovieInfo} movies={this.state.movies} /> : <div><MovieInfo videoOnReady={this.videoOnReady} currentMovie={this.state.currentMovie} videos={this.state.videos}/></div>
            }
            <DemoFooter />

            </div>
        );
    }
}

export default App;