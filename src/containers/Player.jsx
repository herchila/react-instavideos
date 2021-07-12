import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
import NotFound from './NotFound';

const Player = props => {
  const { id } = props.match.params; // Sent by Router
  /**
    props:
      Object { history: {…}, location: {…}, match: {…}, staticContext: undefined }
      - history: Object { length: 50, action: "POP", location: {…}, … }
      - location: Object { pathname: "/player/2", search: "", hash: "", … }
      - match: Object { path: "/player/:id", url: "/player/2", isExact: true, … }
          isExact: true
          params: Object { id: "2" }
          path: "/player/:id"​​
          url: "/player/2"
      - staticContext: undefined
    
    ------------------------------------------------------

    props.match.params:  
      Object { id: "2" }
   */

  const hasPlaying = Object.keys(props.playing > 0);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    props.getVideoSource(id);
    setIsLoading(false);
  }, [])

  return isLoading ? (
    <h1>Loading...</h1>
  ) : 
    hasPlaying ? (
      <div className="Player">
        <video controls autoPlay>
          <source src={props.playing.source} type="video/mp4" />
        </video>
        <div className="Player-back">
          <button type="button" onClick={() => props.history.goBack()}>
            Regresar
          </button>
        </div>
      </div>
    ) : <NotFound />;
};

const mapStateToProps = state => {
  return {
    playing: state.playing,
  }
}

const mapDispatchToProps = {
  getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
