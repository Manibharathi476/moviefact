import React, { Fragment } from 'react';
import YouTube from 'react-youtube';
 
const YoutubeVideo = (props) => {

  const opts = {
    height: '100%',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
  }



  
  

  return (
<Fragment>
  <div style={{paddingBottom: "10px", paddingRight: "10px", paddingLeft:"20px", paddingTop: "20px"}}>

          <YouTube
            videoId={props.movieId} 
            opts = {opts} 
            onReady = {props.videoOnReady}
          />
            </div>
          </Fragment>

  )


}





export default YoutubeVideo;