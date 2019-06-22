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

  handleClick = (event) => {
    console.log('event.target.id:', event.target.id)
    // let movieID = event.target.id;
    // let posterInfo = this.props.reduxState.movies[movieID-1]
    // console.log('poster clicked:', posterInfo)
    // this.props.dispatch({type: 'FETCH_MOVIES_GENRES', payload: posterInfo})
    // this.props.history.push('/details')
    //I tried setting the value of the img to be the movie.id, but event.target.value wasn't working so I had to switch it to id, and that worked. 
    //console.log(event.target.value)
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
                <div key={movie.id}>
                  <img src={movie.poster} alt={movie.description} id={movie.id} onClick={this.handleClick} />
                  {movie.id}
                  <h2>{movie.title}</h2>
                  <li>{movie.description}</li>
                </div>
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
