import React from 'react';
import { Col } from 'reactstrap';
import { Link, Router, BrowserRouter } from 'react-router-dom';

const MovieCard = (props) => {
    const m = props.movieId;
    return (
        
       <Col>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.image == null ? <img src={`https://img.icons8.com/cute-clipart/64/000000/no-image.png`} alt="card-image" style={{width:"100%",height: 360 }}/> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card-image" style={{width:"100%",height: 360 }}/>
                    }
                </div>
                <div className="card-content">
                    <p><BrowserRouter>
                        <Link to={{pathname:'/movieInfo', state: {movie: m}}} onClick={() => props.viewMovieInfo(props.movieId)}>View Details</Link></BrowserRouter></p>
                </div>
            </div>
           
       </Col>
           
    )
}

export default MovieCard;