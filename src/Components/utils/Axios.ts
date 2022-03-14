import axios from "axios";

export const  MovieRequest = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie'
});


export const TvShowRequest = axios.create({
    baseURL: 'https://api.themoviedb.org/3/tv'
})



