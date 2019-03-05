import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import { Route } from 'react-router-dom'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div>
          {/* including the exact prop on your Route component it will set it to true and only mount our Home component when the specific path / is requested 
          and not when /about is requested. */}
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id/" component={Movie} />
        </div>
      </div>
    );
  }
}
