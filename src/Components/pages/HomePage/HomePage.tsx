import React, { useState, useEffect } from 'react';
import Card from '../../UI/Card/Card'

import './HomePage.css'
import { useSelector } from 'react-redux'
import { moviesData, saveData } from '../../utils/store/reducers/movie';
import { loaderState, activeLoader,loaderOff } from '../../utils/store/reducers/loader';
import { MovieRequest } from '../../utils/Axios'
import { TmdbApiKey } from '../../utils/data';
import { useDispatch } from 'react-redux'
import Spinner from '../../UI/Spinner/Spinner';

export interface IProps {

}

const Hompage: React.FC<IProps> = (props) => {


  const dispatch = useDispatch()
  // const [movies,SetMovies] = useState<movieIF[]>([])
  const loader = useSelector(loaderState)

  useEffect(() => {

    const Request = async () => {
      dispatch(activeLoader())
      const Responce = await MovieRequest.get(`/popular?api_key=${TmdbApiKey}`)
      dispatch(saveData(Responce.data.results))
      dispatch(loaderOff())
    }

    Request()
  }, [])




  let movies = useSelector(moviesData)
  const data =  movies.map((p, index) => {
    return (
      <Card key={index} imageUrl={p.poster_path} title={p.title} name={p.name}></Card>
    )
  })


  const showCards = (
    <div className='homepage'>
        <div className='grid grid-col-5'>
         {data}
        </div>
    </div>
  )



return (

    <div className='page_section flex center'>
      {loader?<Spinner></Spinner>:showCards}
    </div>

  );
}

export default Hompage;