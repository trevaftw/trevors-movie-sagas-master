import React, {Component} from 'react'; 
import { connect } from 'react-redux';


class Details extends Component{

    // componentDidMount(){
    //     this.retreiveInfo();
    // }

    // retreiveInfo = () => {
    //     this.props.dispatch({ type: 'FETCH_MOVIES_GENRES'})
    // }
       
    
    render(){
        return(
            <>
            {/* {JSON.stringify(this.props.reduxState.movies_genres, null, 2)} */}
            </>
        )
    }
}

const store = (reduxState) => ({
    reduxState
  })
  
export default connect(store)(Details);