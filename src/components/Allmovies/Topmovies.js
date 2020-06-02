import React, { Component, Fragment } from 'react';
import ExamplesNavbar from 'components/Headers/ExamplesNavbar';
import Movie from 'components/Movie/Movie';
import MovieInfo from 'components/Movie/MovieInfo.js';
import DemoFooter from 'components/Footers/DemoFooter';


class Topmovies extends Component
{
    constructor()
    {
        super()
        this.state = {
            movies : [],
            currentMovie : null
        }
        this.apikey="301b9d2f0ecfe254c54857cc606b793b";
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apikey}&language=en-US&page=1`)
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

    render() {
        return(
            <Fragment>
                <ExamplesNavbar/>
                {this.state.currentMovie == null ? 
                <Movie viewMovieInfo={this.viewMovieInfo} movies={this.state.movies} /> : <MovieInfo currentMovie={this.state.currentMovie}/>
                }
                <DemoFooter/>

            </Fragment>
        )
    }
}

export default Topmovies;