import { ADD_FAV_MOVIE, CLEAR_STATE, GET_MOVIE_DETAIL, REMOVE_MOVIE, SEARCH_MOVIES } from "../actions/actionTypes";

const initialState = {
    favMovies: [],
    movies: [],
    movieDetail: {}
}

export default function rootReducer( state = initialState, { type, payload} ) {

    switch (type) {
        case SEARCH_MOVIES:
            return {
                ...state,
                movies: payload
            }
        
        case ADD_FAV_MOVIE:
            return {
                ...state,
                favMovies: state.favMovies.find( movie => movie.id === payload.id ) 
                                                ? [...state.favMovies] 
                                                : [...state.favMovies, payload]
            }

        case GET_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: payload
            }

        case CLEAR_STATE:
            return {
                ...state,
                movieDetail: {}
            }

        case REMOVE_MOVIE:
            return {
                ...state,
                favMovies: state.favMovies.filter( movie => movie.id !== payload )
            }
        default: return state;
    }
}