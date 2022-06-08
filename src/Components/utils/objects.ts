

type tplotOptions = {
    [key: string]: string[] | undefined
}

export const trendinActionRequestsObject:tplotOptions ={
    movie:[
        'latest',
        'now_playing',
        'popular',
        'top_rated',
        'upcoming'
    ],
    tv:[
        'latest',
        'airing_today',
        'on_the_air',
        'popular',
        'top_rated'
    ],
    person:[
        'latest',
        'popular'
    ]

}