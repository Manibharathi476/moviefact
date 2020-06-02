import React,{ Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Route } from 'react-router-dom';
import Movie from "components/Movie/Movie.js";
import MovieInfo from "components/Movie/MovieInfo.js";

class PopularList extends Component {
    constructor(props) {
      super(props)
      this.state = {
        movies: [],
        currentMovie: null,
        videos: []
      }

      this.viewMovieInfo 
            = this.viewMovieInfo.bind(this);

      this.apikey="301b9d2f0ecfe254c54857cc606b793b";

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

    getMovieId = () => {
      const Id = this.state.currentMovie.id
      console.log(Id);
      fetch(`https://api.themoviedb.org/3/movie/${Id}/videos?api_key=${this.apikey}&language=en-US`)
      .then(data => data.json())
      .then(data => {
        this.setState({videos: [...data.results]})
      })
      
    }
    
    videoOnReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }

    render() {
        return (
          <div className="PopularList">
            <Movie movies={this.state.movies} viewMovieInfo={this.viewMovieInfo}/>
            <Route path="/movieInfo" render ={props => <MovieInfo {...props} currentMovie={this.state.currentMovie} />} />
          </div>
        );
      }

}

export default PopularList;