import React from 'react';
import MovieCard from "components/Movie/MovieCard.js";
import { Container, Row, Col } from 'reactstrap';

const Movie = (props) => {
    return (
        <Container>
            <Row>
                <Col xs="6" sm="4">
                    {
                        props.movies.map((movie, i ) => {
                            return (
                            <MovieCard key={i} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} image={movie.poster_path}/>
                            )
                        })
                    }

                </Col>
            </Row>
        </Container>
    )
    

}

export default Movie;