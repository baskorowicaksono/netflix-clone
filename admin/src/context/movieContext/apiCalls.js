import { createMovieFailure, createMovieStart, createMovieSuccess, deleteMoviesFailure, deleteMoviesStart, deleteMoviesSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieActions"
import axios from "axios"

// Get Movies
export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await axios.get("/movies", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        });

        dispatch(getMoviesSuccess(res.data));
    } catch (error) {
        dispatch(getMoviesFailure());
    }
}

// Create Movie
export const createMovie = async(movie, dispatch) => {
    dispatch(createMovieStart());
    try{
        const res = await axios.post("/movies/", movie, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        });

        dispatch(createMovieSuccess(res.data));
    } catch(error){
        dispatch(createMovieFailure());
    }
}

// Delete movie
export const deleteMovie = async(id, dispatch) => {
    dispatch(deleteMoviesStart());
    try {
        await axios.delete("/movies/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(deleteMoviesSuccess(id));
    } catch (error) {
        dispatch(deleteMoviesFailure());
    }
}