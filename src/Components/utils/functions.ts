import axios from "axios"
import { TmdbApiKey } from "./data"
let url = 'https://api.themoviedb.org/3'


interface ApirequestProps{
    section:string
    trendingType:string
    page:number
}

export const FetchApiData = async ({section,trendingType,page}:ApirequestProps) =>{
    const {data} = await axios.get(`${url}/${section}/${trendingType}?api_key=${TmdbApiKey}&page=${page}`)
    return data
}