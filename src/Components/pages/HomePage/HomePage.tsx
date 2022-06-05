import React, {useEffect } from 'react';
import Card from '../../UI/Card/Card'

import './HomePage.css'
import {fetchDataFromApi, LoaderState, moviesData } from '../../utils/store/reducers/movie';
import { useDispatch,useSelector } from 'react-redux'
import Spinner from '../../UI/Spinner/Spinner';

export interface IProps {

}

const Hompage: React.FC<IProps> = (props) => {


  const dispatch = useDispatch()
  const loader = useSelector(LoaderState)
  let movies = useSelector(moviesData)
  
  useEffect(() => {
    
    const Request = async () => {
      dispatch(fetchDataFromApi())
    }
    Request()
  },[])
  
  
  

  const data =  movies.map((p, index) => {
    return (
      <Card key={index} imageUrl={p.poster_path || p.profile_path} title={p.title} rating={p.vote_average} name={p.name} year={p.release_date || p.first_air_date}></Card>
    )
  })
  
  
  const showCards = (
    <div className='homepage container'>
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