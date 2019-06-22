import React, {Component} from 'react'; 
import { connect } from 'react-redux';


class Details extends Component{


    render(){
        return(
            <>
            {/* <h1>{this.props.reduxState.movies_genres}</h1> */}
            {/* {this.props.reduxState.movies_genres.map(object => {
                return (
                    <h1>{object.title}</h1>
                )
            })} */}
            {JSON.stringify(this.props.reduxState.movies_genres, null, 4)}
            </>
        )
    }
}

const store = (reduxState) => ({
    reduxState
  })
  
export default connect(store)(Details);