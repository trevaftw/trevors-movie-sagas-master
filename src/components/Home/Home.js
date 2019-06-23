import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        {/* {JSON.stringify(this.props, null, 2)} */}
        <br />
        <h1>Movie time!</h1>
        <ul>
          <MovieList />
        </ul>
      </div>
    );
  }
}

const store = (reduxState) => ({
  reduxState
})

export default connect(store)(App);
