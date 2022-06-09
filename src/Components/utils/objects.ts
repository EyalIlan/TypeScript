

type tplotOptions = {
    [key: string]: {value:string,text:string}[] | undefined
}

export const trendinActionRequestsObject:tplotOptions ={
    movie:[
        {value:'latest',text:'Latest'},
        {value:'now_playing',text:'Now Playing'},
        {value:'popular',text:'Popular'},
        {value:'top_rated',text:'Top Rated'},
        {value:'upcoming',text:'Upcoming'},
    ],
    tv:[
        {value:'latest',text:'Latest'},
        {value:'airing_today',text:'Airing Today'},
        {value:'on_the_air',text:'On The Air'},
        {value:'popular',text:'Popular'},
        {value:'top_rated',text:'Top Rated'},
    ],
    person:[
        {value:'latest',text:'Latest'},
        {value:'popular',text:'Popular'}
    ]

}