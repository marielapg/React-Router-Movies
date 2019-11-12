import React from 'react';
import {NavLink, Route} from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink to={`/movie/${movie.id}`} className="saved-movie">{movie.title}</NavLink>
    ))}
    <div className="home-button">
      <NavLink to="/">Home</NavLink>
      </div>
      <Route exact path='/movie/dataID'/>
  </div>
);

export default SavedList;
