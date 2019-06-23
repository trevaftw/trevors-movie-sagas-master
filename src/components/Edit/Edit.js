import React, { Component } from 'react';

class Edit extends Component {
    state = {
        title: '',
        description: '',
    }

    handleSubmit = () => {
        console.log('handleSubmit');
        console.log('this.state:', this.state);
    }

    handleCancel = () => {
        console.log('handleCancel')
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
                <textarea rows="4" cols="100" placeholder="New movie description" onChange={this.handleDescription} value={this.state.description}></textarea>
                <h1>When I come back, have the input field and text area create a local state, and on submit they will run a saga that updates the database</h1>
                <button onClick={this.handleSubmit}>Submit Changes</button><button onClick={this.handleCancel}>Cancel Changes</button>
            </>
        )
    }
}

export default Edit;