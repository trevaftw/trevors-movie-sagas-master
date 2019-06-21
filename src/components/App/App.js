import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  // Renders the entire app on the DOM

  componentDidMount(){
    this.getMovies();
  }

  getMovies = () =>{
    this.props.dispatch({type: 'FETCH_MOVIES'})
  }

  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
        <h1>HAVE THE MOVIE FETCH SETUP!</h1>
        <h2>See the console log to see the movies</h2>
        <p>Next get the images to display on the dom with a map. Create a component to do this. </p>
      </div>
    );
  }
}

export default connect()(App);
