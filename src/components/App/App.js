import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';


import Details from '../Details/Details';
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/details" component={Details} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

const store = (reduxState) => ({
  reduxState
})

export default connect(store)(App);
