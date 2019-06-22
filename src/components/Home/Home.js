import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {
  // Renders the entire app on the DOM

  componentDidMount() {
    this.getMovies();
  }

  getMovies = () => {
    this.props.dispatch({ type: 'FETCH_MOVIES' })
  }

  render() {
    return (
        <div className="App">
          <br />
          {/* {JSON.stringify(this.props.reduxState.movies, null, 2)} */}
          <br />
          <h1>Movie time!</h1>
          <ul>
            {this.props.reduxState.movies.map(movie => {
              return (
                <>
                  <img src={movie.poster} alt={movie.description} />
                  <h2>{movie.title}</h2>
                  <li>{movie.description}</li>
                  <br /> <br />
                </>
              )

            })}
          </ul>
        </div>
    );
  }
}

const store = (reduxState) => ({
  reduxState
})

export default connect(store)(App);
