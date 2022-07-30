
export interface CardIF{
    title?:string
    name?:string
    overview:string
    vote_average:number
    poster_path?:string
    profile_path?:string
    release_date?:string
    first_air_date?:string
    id:number
}

export interface Features{
    showSearch:boolean
    showActionMenu:boolean
    showModal:boolean
}