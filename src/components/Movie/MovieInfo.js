import React, { Fragment, Component } from 'react';
import YoutubeVideo from './YoutubeVideo';
import { Container, Row } from 'reactstrap';
import Movie from './Movie';




class MovieInfo extends Component {
    constructor()
    {
        super()
        this.state = {
            videos: [],
            similar : []
        }

        this.apikey = "301b9d2f0ecfe254c54857cc606b793b";
    }
    
    componentDidMount() {
        const Id = this.props.currentMovie.id

      console.log(Id);
      console.log(this.props.currentMovie)
      fetch(`https://api.themoviedb.org/3/movie/${Id}/videos?api_key=${this.apikey}&language=en-US`)
      .then(data => data.json())
      .then(data => {
        this.setState({videos: [...data.results]}, () => {
            console.log(this.state.videos);})
      })


      fetch(`https://api.themoviedb.org/3/movie/557/recommendations?api_key=${this.apikey}`)
      .then(recommendation => recommendation.json())
      .then(recommendation => {
          this.setState({similar: [...recommendation.results]}, () => {
              console.log("similar",this.state.similar)
          })
      })
    }

    


    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
    render() {
    return(
        <Fragment>

             <Container>
            
            <Row>
            <div className='col s12 m4'>
                
                    { this.props.currentMovie.poster_path == null ? <img src={`https://img.icons8.com/cute-clipart/64/000000/no-image.png`} alt="Card image" style={{width: "100%", height: 360}}/> : 
                    <img src={`http://image.tmdb.org/t/p/w185${this.props.currentMovie.poster_path}`} alt="card-image" style={{width:"100%",height: 360 }}/>}
                </div>
                <div className='col s12 m8'>
                    <div className='info-container'>
                        <p>{this.props.currentMovie.title}</p>
                        <p>{this.props.currentMovie.release_date.substring(5).split("-").concat(this.props.currentMovie.release_date.substring(0,4)).join("/")}</p>
                        <p>{this.props.currentMovie.overview}</p>
                        <p>{this.props.currentMovie.id}</p>
                        <p><b>Popularity: </b>{this.props.currentMovie.popularity}</p>
                    </div>    
                </div>    
            </Row>

            { this.state.videos.length == 0 ? " " :
            <Fragment>
                <Row>
                <p><h2>Related Youtube videos</h2></p>
                </Row>
                <Row>
                {
                    
                            this.state.videos.map((_video, i ) => {
                                console.log("This is youtube section")
                                return (
                                <YoutubeVideo key={i} movieId={_video.key} videoOnReady={this.videoOnReady}/>
                                )
                            })
                }

                </Row>
                </Fragment>

                }
                <Row><p><h2>Similar Movies</h2></p></Row>
                <Row>
                <Movie movies={this.state.similar}/>
                </Row>
                

                

                
                
                  


            
             
        </Container>
        </Fragment>
        
    )
    }

}
export default MovieInfo;