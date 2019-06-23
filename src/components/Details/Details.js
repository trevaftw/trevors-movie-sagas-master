import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Details extends Component {
    render() {
        return (
            <>
                {this.props.reduxState.movies.map((movie, i) => {
                    return (
                        <div key={i}>
                            <h1>{movie.title}</h1>
                            {this.props.reduxState.genres.map((genre, i) => {
                                return (
                                    <li key={i}>{genre.name}</li>
                                )
                            })}
                            <p>{movie.description}</p>
                        </div>
                    )
                })}


                <Link to="/"><button>Return to Movie List</button></Link>
                <Link to="/edit"><button>Modify the info</button></Link>
                {/* {JSON.stringify(this.props.reduxState.movies, null, 4)}
            <br /> <br />
            {JSON.stringify(this.props.reduxState.genres, null, 4)} */}
            </>
        )
    }
}

const store = (reduxState) => ({
    reduxState
})

export default connect(store)(Details);