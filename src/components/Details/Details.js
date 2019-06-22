import React, {Component} from 'react'; 
import { connect } from 'react-redux';


class Details extends Component{


    render(){
        return(
            <>
            {this.props.reduxState.movies.map(movie => {
                return (
                    <h1>{movie.title}</h1>
                )
            })}
            {this.props.reduxState.genres.map((genre, i) => {
                return (
                    <li key={i}>{genre.name}</li>
                )
            })}
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