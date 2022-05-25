import { SEARCH_MOVIES, ADD_FAV_MOVIE, GET_MOVIE_DETAIL, CLEAR_STATE, REMOVE_MOVIE } from "./actionTypes"
import { APIKEY } from "../../App"
import axios from 'axios'

export function getMovies(movie){
    return (dispatch) => {
        return fetch(`http://www.omdbapi.com/?apikey=${ APIKEY }&s=${ movie }`)
            .then( response => response.json() )
            .then( json => dispatch({
                type: SEARCH_MOVIES,
                payload: json.Search
            }) )
    }
}

export function addFavMovie(payload) {
    return {
        type: ADD_FAV_MOVIE,
        payload
    }
}

export function getMovieDetail(id) {
    return (dispatch) => {
        return axios.get(`http://www.omdbapi.com/?apikey=${ APIKEY }&i=${ id }`)
            .then( res => dispatch({type: GET_MOVIE_DETAIL, payload:res.data}) ) 
    }
}

export function clearState() {
    return {
        type: CLEAR_STATE
    }
}

export function removeFavMovie(payload) {
    return {
        type: REMOVE_MOVIE,
        payload
    }
}