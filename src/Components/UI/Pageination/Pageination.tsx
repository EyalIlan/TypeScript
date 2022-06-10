import React from 'react'

import {useDispatch,useSelector} from 'react-redux'
import {NumberOfPages,currentPage} from '../../utils/store/reducers/movie'

interface Props {

}

const Pageination:React.FC<Props> = () => {

    const dispatch = useDispatch()
    const numberOfPages = useSelector(NumberOfPages)
    // const page = useSelector(currentPage)
    const page = 10

    let pages = [] 

    for (let i = 0; i <= 4; i++) {
       
       if(page + i <= numberOfPages ){
            pages.push(page + i)
       }
       if (page -i > 0 && (page-i !== page)) {
           pages.push(page - i )
       } 

    }

    pages = pages.sort()

    console.log(pages);
    

    return (
    <div>Pageination</div>
  )
}

export default Pageination