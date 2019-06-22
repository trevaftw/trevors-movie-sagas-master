import React, { Component } from 'react';

class Edit extends Component {
    render() {
        return (
            <>
                <h1>Edit</h1>
                <input placeholder="New Movie Title"></input>
                <br />
                <textarea rows="4" cols="100"></textarea>
            </>
        )
    }
}

export default Edit;