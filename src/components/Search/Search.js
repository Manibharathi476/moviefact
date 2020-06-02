import React, { Component, Fragment } from 'react';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import IndexHeader from 'components/Headers/IndexHeader';
import Movie from 'components/Movie/Movie.js';
import { Link, Route } from 'react-router-dom';
import { Container, Row, Form, Label, Input, Badge, Button } from 'reactstrap';
import MovieInfo from 'components/Movie/MovieInfo';
import DemoFooter from 'components/Footers/DemoFooter';

class Search extends Component {
    constructor()
    {
        super()
        this.state = {
            searchTerm: '',
            movies: [],
            totalResults: 0,
            currentPage: 1,
            currentMovie: null,
            videos: []
        }
        this.apikey = "301b9d2f0ecfe254c54857cc606b793b";
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.searchTerm)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(response => {
          this.setState({ movies: [...response.results]}, () => {
            console.log(this.state.movies);
          })
        })
      }
    
      handleChange = (e) => {
        this.setState({ searchTerm: e.target.value })
        console.log(this.state.searchTerm)
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
        return (
            <Fragment>
                <IndexNavbar/>
                <IndexHeader />
                <br/><br/>
                <Container>
                    <Row>
                        {this.state.currentMovie == null ?

                    <div><Form action="" onSubmit={this.handleSubmit} style={{paddingLeft: "425px"}}>
                            <Badge color="dark"><b>Search Movie</b></Badge>
                            <Input type="text" name="movie_name" placeholder="movie name" onChange={this.handleChange}/>
                            <Button onClick={this.handleSubmit}>Search</Button> 
                    </Form><Movie movies={this.state.movies} viewMovieInfo={this.viewMovieInfo}/></div> : <MovieInfo viewMovieInfo={this.viewMovieInfo} currentMovie={this.state.currentMovie} videos={this.state.videos} getmovieid={this.getMovieId}/>
                        }
                    </Row>
                </Container>
                <DemoFooter/>

            </Fragment>
        )
    }
}
export default Search;