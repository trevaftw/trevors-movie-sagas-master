import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies)
    yield takeEvery('FETCH_SINGLE_MOVIE', fetchSingleMovie)
    yield takeEvery('UPDATE_MOVIE', updateMovie)
    // yield takeEvery('FETCH_MOVIES_GENRES', fetchMoviesGenres)
}

function* fetchMovies() {
    try {
        console.log('Fetching Movies Saga');
        const fetchMovieResponse = yield axios.get('/api/movies')
        yield put({ type: 'SET_MOVIES', payload: fetchMovieResponse.data })
    } catch (error) {
        console.log('error with fetchMovies:', error)
    }
}

function* fetchSingleMovie(action) {
    try {
        // console.log('fetchSingleMovie');
        // console.log('action.payload:', action.payload)
        const fetchSingleMovieResponse = yield axios.get(`api/singleMovie/${action.payload}`)
        // console.log('fetchSingleMovieResponse.data:', fetchSingleMovieResponse.data)
        yield put({ type: 'SINGLE_MOVIE', payload: fetchSingleMovieResponse.data })
        //
        const fetchSingleGenreResponse = yield axios.get(`api/movies_genres/${action.payload}`)
        // console.log('fetchSingleGenreResponse.data:', fetchSingleGenreResponse.data)
        yield put({ type: 'SET_TAGS', payload: fetchSingleGenreResponse.data })
    } catch (error) {
        console.log('error with fetchSingleMovie:', error)
    }
}

function* updateMovie(action) {
    try {
        console.log('Updating Movie Saga', action.payload);
        yield axios.put(`/api/update_movie/`, (action.payload));
        yield put({ type: 'FETCH_MOVIES' })
        yield put({ type: 'SINGLE_MOVIE', payload: [action.payload]})
    } catch (error) {
        console.log('error with update movies:', error)
    }
}

// function* fetchMoviesGenres(action) {
//     try {
//         console.log('fetchMoviesGenres')
//         const fetchMovieResponse = yield axios.get(`api/movies_genres/${action.payload.id}`)
//         yield put({ type: 'SET_MOVIES_GENRES', payload: fetchMovieResponse.data})
//     } catch (error) {
//         console.log('error with fetchMovies:', error)
//     }
// }

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

const singleMovie = (state = [], action) => {
    switch (action.type) {
        case 'SINGLE_MOVIE':
            return action.payload;
        case 'EMPTY_MOVIE':
            return [];
        default:
            return state;
    }
}

// const movies_genres = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_MOVIES_GENRES':
//             return action.payload;
//         default:
//             return state
//     }
// }

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        // movies_genres
        singleMovie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
