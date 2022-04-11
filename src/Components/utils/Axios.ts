import axios from "axios";

let url = 'https://api.themoviedb.org/3'

export const  tmdbUrl = axios.create({
    baseURL:url
})

export const  MovieRequest = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie'
});

export const TvShowRequest = axios.create({
    baseURL: 'https://api.themoviedb.org/3/tv'
})



