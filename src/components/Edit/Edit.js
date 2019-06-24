import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Edit extends Component {
    state = {
        id: (this.props.reduxState && this.props.reduxState[0] && this.props.reduxState[0].id) || 0,
        title: (this.props.reduxState && this.props.reduxState[0] && this.props.reduxState[0].title) || '',
        description: (this.props.reduxState && this.props.reduxState[0] &&this.props.reduxState[0].description) || '',
    }

    handleSubmit = () => {
        console.log('handleSubmit');
        console.log('this.state:', this.state);
        this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state })
        this.props.history.push('/details');

    }

    handleTitle = (event) => {
        this.setState({
            ...this.state,
            title: event.target.value,
        })
    }

    handleDescription = (event) => {
        this.setState({
            ...this.state,
            description: event.target.value
        })
    }

    render() {
        return (
            <>
                <h1>Edit</h1>
                <label>New Movie Title</label><br />
                <input placeholder="New Movie Title" onChange={this.handleTitle} value={this.state.title}></input>
                <br /><br />
                <label>New movie description</label><br />
                <textarea rows="8" cols="100" placeholder="New movie description" onChange={this.handleDescription} value={this.state.description}></textarea>
                <br /><br />
                <button onClick={this.handleSubmit}>Submit Changes</button><Link to="/details"><button>Return to Details Page</button></Link>
                <br /><br />
                {JSON.stringify(this.props.reduxState, null, 2)}
            </>
        )
    }
}

const store = (reduxState) => ({ reduxState: reduxState.singleMovie })

export default connect(store)(Edit);